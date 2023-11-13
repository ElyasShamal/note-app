import React, { useState } from "react";
import Note from "./Note";

function Main() {
  const [showForm, setShowForm] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });
  const [newNote, setNewNote] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Note",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noteData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const addedNote = await response.json();
      setNewNote(addedNote);
      setNoteData({ title: "", content: "" });
      toggleClose();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const toggleForm = () => setShowForm((prevShowForm) => !prevShowForm);
  const toggleClose = () => setShowForm(false);

  return (
    <div className="container">
      <main className="main">
        <div className="add-section">
          {showForm ? (
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  value={noteData.title}
                  required
                />
                <label htmlFor="content">Content:</label>
                <textarea
                  id="content"
                  name="content"
                  onChange={handleChange}
                  value={noteData.content}
                  required
                ></textarea>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
              <button className="close" onClick={toggleClose}>
                X
              </button>
            </div>
          ) : (
            <div style={{ display: "inline-block", width: "100%" }}>
              <button onClick={toggleForm} className="add-btn">
                Add Note
              </button>
            </div>
          )}
        </div>
      </main>
      <Note newNote={newNote} onNoteAdded={() => setNewNote(null)} />
    </div>
  );
}

export default Main;
