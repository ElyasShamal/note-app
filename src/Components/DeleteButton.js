import React from "react";

function DeleteButton({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <button className="delete-btn" onClick={handleDelete}>
      X
    </button>
  );
}

export default DeleteButton;
