import { createContext, useState, useEffect, useContext } from "react";
import UseTasks from "../hooks/UseTasks";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { tasks, addTask, deleteTask, updateTask } = UseTasks();

  const value = {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
