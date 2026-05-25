import { useState } from "react";

function NoteForm({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { id: Date.now(), title, description };
    setNotes([...notes, note]);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add note</h2>

      {/* <label htmlFor="title"></label> */}
      <input
        type="text"
        placeholder="Enter title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <label htmlFor="description"></label> */}
      <textarea
        id="description"
        placeholder="Enter details"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
