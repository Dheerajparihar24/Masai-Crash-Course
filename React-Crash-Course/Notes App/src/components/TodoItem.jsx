import { useEffect, useRef, useState } from "react";

export default function TodoItem({
  id,
  title,
  isCompleted,
  onDelete,
  onToggle,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const inputRef = useRef(null);

  useEffect(()=>{
    if(isEditing){
      inputRef.current.focus()
    }
  },[isEditing])

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    onUpdate(id, newTitle);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }

    if (e.key === "Escape") {
      setNewTitle(title);
      setIsEditing(false);
    }
  };

  return (
    <section className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Enter updated title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p
            className="todo-title"
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >
            {title}
          </p>
          <button onClick={onToggle}>
            {isCompleted ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={onDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </section>
  );
}
