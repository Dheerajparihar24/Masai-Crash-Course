import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete, onUpdate }) {
  if (notes.length === 0) return <h3>No notes..</h3>;
  return (
    <section className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={() => onDelete(note.id)}
          onUpdate={onUpdate}
        />
      ))}
    </section>
  );
}

export default NoteList;
