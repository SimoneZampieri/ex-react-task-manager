import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText = "Conferma",
}) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-6">{content}</div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Annulla
          </button>
          <button
            className="px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
