import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

const TaskList = () => {
  const { tasks } = useGlobalContext();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Lista delle Task</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-gray-700">Nome</th>
            <th className="px-6 py-3 text-left text-gray-700">Stato</th>
            <th className="px-6 py-3 text-left text-gray-700">
              Data Creazione
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <TaskRow key={task.id} task={task} />)}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
