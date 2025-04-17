import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks } = useGlobalContext();
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Lista delle Task</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
            <div
              className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
                task.status === "To do"
                  ? "bg-red-200 text-red-600"
                  : task.status === "Doing"
                  ? "bg-yellow-200 text-yellow-600"
                  : "bg-green-200 text-green-600"
              }`}
            >
              {task.status}
            </div>
            <p className="text-gray-600 text-sm">
              Creata il: {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
