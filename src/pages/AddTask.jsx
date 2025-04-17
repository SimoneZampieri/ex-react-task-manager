import React, { useState, useRef } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const validateTitle = (value) => {
    if (!value.trim()) {
      setTitleError("Il titolo non può essere vuoto");
      return false;
    }
    if ([...value].some((char) => symbols.includes(char))) {
      setTitleError("Il titolo non può contenere simboli speciali");
      return false;
    }
    setTitleError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateTitle(title)) return;

    const newTask = {
      title: title.trim(),
      description: descriptionRef.current.value.trim(),
      status: statusRef.current.value,
    };

    console.log(newTask);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Aggiungi una Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nome Task</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              validateTitle(e.target.value);
            }}
            className="w-full p-2 border rounded"
          />
          {titleError && (
            <p className="text-red-500 text-sm mt-1">{titleError}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Descrizione</label>
          <textarea
            ref={descriptionRef}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        <div>
          <label className="block mb-1">Stato</label>
          <select
            ref={statusRef}
            defaultValue="To do"
            className="w-full p-2 border rounded"
          >
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Aggiungi Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
