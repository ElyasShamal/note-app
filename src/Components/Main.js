import React, { useState } from "react";

function Main() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((showForm) => !showForm);
  const toggleClose = () => setShowForm(false);

  return (
    <main className="main">
      <div className="add-section">
        {showForm ? (
          <div className="form-container">
            <form className="form">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" />

              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content"></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 30px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
            <button className="close" onClick={toggleClose}>
              X
            </button>
          </div>
        ) : (
          <button onClick={toggleForm}>Add Note</button>
        )}
      </div>
    </main>
  );
}

export default Main;
