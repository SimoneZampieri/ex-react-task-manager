import { Link } from "react-router-dom";
import React from "react";

const TaskRow = React.memo(({ task }) => {
  const color = {
    "To do": "bg-red-200",
    Doing: "bg-yellow-200",
    Done: "bg-green-200",
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <Link
          to={`/task/${task.id}`}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          {task.title}
        </Link>
      </td>
      <td className={`px-6 py-4 ${color[task.status]}`}>{task.status}</td>
      <td className="px-6 py-4">
        {new Date(task.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
});

export default TaskRow;
