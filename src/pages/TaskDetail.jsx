import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask, updateTask } = useGlobalContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <div className="p-4">Task non trovata</div>;
  }

  const handleDelete = async () => {
    try {
      await deleteTask(parseInt(id));
      alert("Task eliminata con successo!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask({
        ...updatedTask,
        id: parseInt(id),
      });
      alert("Task aggiornata con successo!");
      setShowEditModal(false);
    } catch (error) {
      alert(error.message);
    }
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
        <div className="flex gap-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Modifica Task
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Elimina Task
          </button>
        </div>
      </div>

      <Modal
        show={showDeleteModal}
        title="Conferma Eliminazione"
        content="Sei sicuro di voler eliminare questa task?"
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          setShowDeleteModal(false);
          handleDelete();
        }}
        confirmText="Elimina"
      />

      <EditTaskModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        task={task}
        onSave={handleUpdate}
      />
    </div>
  );
};

export default TaskDetail;
