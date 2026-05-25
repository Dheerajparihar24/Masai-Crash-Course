import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import "./App.css";
import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleUpdate = (id, updatedTitle, updatedDescription) => {
    const updatedNote = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            title: updatedTitle,
            description: updatedDescription,
          }
        : note,
    );
    setNotes(updatedNote)
  };
  return (
    <>
      <Navbar />
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );
}

export default App;
