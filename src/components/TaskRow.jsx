import { memo } from "react";

const TaskRow = ({ task }) => {
  const { title, status, createdAt } = task;

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded text-sm ${
            status === "To do"
              ? "bg-red-200 text-red-600"
              : status === "Doing"
              ? "bg-yellow-200 text-yellow-600"
              : "bg-green-200 text-green-600"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-gray-600">
        {new Date(createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default memo(TaskRow);
