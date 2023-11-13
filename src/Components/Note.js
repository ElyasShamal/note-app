import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

function Note({ newNote, onNoteAdded }) {
  const [Note, setNote] = useState([]);

  useEffect(() => {
    let isMouted = true;
    fetch("https://phase-2-backend-json-server-template.onrender.com/Note")
      .then((response) => response.json())
      .then((data) => {
        if (isMouted) {
          setNote(data);
        }
      });

    return () => {
      isMouted = false;
    };
  }, [newNote, onNoteAdded]);

  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(
        `https://phase-2-backend-json-server-template.onrender.com/Note/${noteId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      setNote((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <section className="note-section">
      <div className="note-container">
        {Note.map((notes) => {
          return (
            <div className="notes-container" key={notes.id}>
              <h1>{notes.title}</h1>
              <p>{notes.content}</p>
              <DeleteButton onDelete={() => handleDelete(notes.id)} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Note;
