import { useState, useRef } from "react";
import React from "react";
import Modal from "./Modal";

// Componente EditTaskModal: consente di modificare i dettagli di un task esistente.
// Props:
// - show: booleano che determina se il modal è visibile o meno.
// - onClose: funzione chiamata per chiudere il modal.
// - task: oggetto che rappresenta il task da modificare.
// - onSave: funzione chiamata per salvare le modifiche al task.
const EditTaskModal = ({ show, onClose, task, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "To do");
  const editFormRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave({
      ...task,
      id: task.id,
      title,
      description,
      status,
    });
  };

  const modalContent = (
    <form ref={editFormRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Titolo Task</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Descrizione</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      <div>
        <label className="block mb-1">Stato</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="To do">To Do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </form>
  );

  return (
    <Modal
      show={show}
      title="Modifica Task"
      content={modalContent}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
      confirmText="Salva"
    />
  );
};

export default EditTaskModal;
