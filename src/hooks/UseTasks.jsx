import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${apiUrl}/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
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

      setTasks((prev) => [...prev, data.task]);
      return data.task;
    } catch (error) {
      throw error;
    }
  };

  const updateTask = () => {
    //vuoto per il momento
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
      
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      throw error;
    }
  };

  return { tasks, addTask, updateTask, deleteTask };
}
