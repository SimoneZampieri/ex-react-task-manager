import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const TaskDetail = () => {
  const { tasks } = useGlobalContext();
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <div className="p-4">Task non trovata</div>;
  }

  const handleDelete = () => {
    console.log("Task eliminata:", id);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dettagli Task</h2>
      <div className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <h3 className="text-gray-600">Titolo</h3>
          <p className="text-xl">{task.title}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-gray-600">Descrizione</h3>
          <p className="text-xl">{task.description}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-gray-600">Stato</h3>
          <p className="text-xl">{task.status}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-gray-600">Data di Creazione</h3>
          <p className="text-xl">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Elimina Task
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
