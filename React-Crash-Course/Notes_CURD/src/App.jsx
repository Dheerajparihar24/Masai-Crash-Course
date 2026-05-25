import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import "./App.css";
import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [searchQuery, setSearchQuery] = useState("");

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
    setNotes(updatedNote);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList
        notes={filteredNotes}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
