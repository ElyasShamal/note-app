import React, { useState, useEffect } from "react";

function Note() {
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
  }, []);

  return (
    <section className="note-section">
      <div className="note-container">
        {Note.map((notes) => {
          return (
            <div className="notes-container" key={notes.id}>
              <h1>{notes.title}</h1>
              <p>{notes.content}</p>
              <button className="delete-btn">X</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Note;
