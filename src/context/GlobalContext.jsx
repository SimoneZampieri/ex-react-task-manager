import { createContext, useState, useEffect, useContext } from "react";

export const GlobalContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

export const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Task acquisita:", data);
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const value = {
    tasks,
    setTasks,
    apiUrl,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
