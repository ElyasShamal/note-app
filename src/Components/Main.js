import React, { useState } from "react";
import Note from "./Note";

function Main() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((showForm) => !showForm);
  const toggleClose = () => setShowForm(false);

  return (
    <div className="container">
      <main className="main">
        <div className="add-section">
          {showForm ? (
            <div className="form-container">
              <form className="form">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" />
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content"></textarea>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
              <button className="close" onClick={toggleClose}>
                X
              </button>
            </div>
          ) : (
            <div style={{ display: "inline-block", widthl: "100%" }}>
              <button onClick={toggleForm} className="add-btn">
                Add Note
              </button>
            </div>
          )}
        </div>
      </main>
      <Note />
    </div>
  );
}

export default Main;
