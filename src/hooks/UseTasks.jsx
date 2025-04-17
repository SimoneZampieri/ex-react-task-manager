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

  const addTask = () => {
    //vuoto per il momento
  };

  const updateTask = () => {
    //vuoto per il momento
  };

  const deleteTask = () => {
    //vuoto per il momento
  };

  return [tasks, addTask, updateTask, deleteTask];
}
