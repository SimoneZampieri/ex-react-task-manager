import { useEffect, useReducer } from "react";
import { TaskReducer } from "./TaskReducer";
import dayjs from "dayjs";

export default function useTasks() {
  // Utilizzo del reducer per gestire lo stato dei task
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTasks();
  }, []);

  // Funzione per recuperare i task dal server
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${apiUrl}/tasks`);
      const data = await response.json();
      dispatch({ type: "LOAD_TASKS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  // Verifica se esiste già un task con lo stesso titolo
  const checkDUplicateTitle = (title, excludeId = null) => {
    return tasks.some(
      (task) =>
        task.title.toLowerCase() === title.toLowerCase() &&
        task.id !== excludeId
    );
  };

  const addTask = async (taskData) => {
    try {
      const response = await fetch(`${apiUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch({ type: "ADD_TASK", payload: data.task });
      return data.task;
    } catch (error) {
      throw error;
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`${apiUrl}/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedTask.title,
          description: updatedTask.description,
          status: updatedTask.status,
        }),
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch({ type: "UPDATE_TASK", payload: data.task });
      return data.task;
    } catch (error) {
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/tasks/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch({ type: "DELETE_TASK", payload: id });
    } catch (error) {
      throw error;
    }
  };

  const removeMultipleTasks = async (taskIds) => {
    try {
      const deletePromises = taskIds.map((id) =>
        fetch(`${apiUrl}/tasks/${id}`, {
          method: "DELETE",
        }).then((res) => res.json())
      );

      const results = await Promise.all(deletePromises);

      const hasErrors = results.some((result) => !result.success);
      if (hasErrors) {
        throw new Error("Failed to delete one or more tasks");
      }

      dispatch({ type: "REMOVE_MULTIPLE_TASKS", payload: taskIds });
    } catch (error) {
      throw error;
    }
  };

  return { tasks, addTask, updateTask, deleteTask, removeMultipleTasks };
}
