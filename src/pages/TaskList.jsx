import React, { useMemo, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

const TaskList = () => {
  const { tasks } = useGlobalContext();
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState(1);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(column);
      setSortOrder(1);
    }
  };

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title) * sortOrder;
        case "status":
          return a.status.localeCompare(b.status) * sortOrder;
        case "createdAt":
          return new Date(a.createdAt) - new Date(b.createdAt) * sortOrder;
        default:
          return 0;
      }
    });
  }, [sortBy, sortOrder, tasks]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Lista delle Task</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th 
              onClick={() => handleSort("title")}
              className="px-6 py-3 text-left text-gray-700 cursor-pointer"
            >
              Nome {sortBy === "title" && (sortOrder === 1 ? "↑" : "↓")}
            </th>
            <th 
              onClick={() => handleSort("status")}
              className="px-6 py-3 text-left text-gray-700 cursor-pointer"
            >
              Stato {sortBy === "status" && (sortOrder === 1 ? "↑" : "↓")}
            </th>
            <th 
              onClick={() => handleSort("createdAt")}
              className="px-6 py-3 text-left text-gray-700 cursor-pointer"
            >
              Data Creazione {sortBy === "createdAt" && (sortOrder === 1 ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => <TaskRow key={task.id} task={task} />)}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
