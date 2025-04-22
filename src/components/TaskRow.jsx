import { Link } from "react-router-dom";
import React from "react";
import dayjs from "dayjs";

// Componente TaskRow: gestisce la visualizzazione di una singola riga nella tabella dei task
// Utilizza React.memo per ottimizzare le performance evitando re-render non necessari
// Props:
// - task: oggetto contenente i dati del task
// - checked: stato della checkbox per la selezione multipla
// - onToggle: funzione per gestire il cambio di stato della checkbox
const TaskRow = React.memo(({ task, checked, onToggle }) => {
  // Mappa degli stati dei task ai relativi colori di sfondo
  const color = {
    "To do": "bg-red-200",
    Doing: "bg-yellow-200",
    Done: "bg-green-200",
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(task.id)}
            className="w-4 h-4"
          />
        </div>
        <Link
          to={`/task/${task.id}`}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          {task.title}
        </Link>
      </td>
      <td className={`px-6 py-4 ${color[task.status]}`}>{task.status}</td>
      <td className="px-6 py-4">
        {dayjs(task.createdAt).format("DD/MM/YYYY")}
      </td>
    </tr>
  );
});

export default TaskRow;
