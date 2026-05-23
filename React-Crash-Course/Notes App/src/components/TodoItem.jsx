import { useState } from "react";

export default function TodoItem({
  todo,
  isCompleted,
  onDelete,
  onToggle,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className="todo-item">
      <p>{todo}</p>
      <button onClick={onToggle}>
        {isCompleted ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={onDelete}>Delete</button>
      <button>Edit</button>
    </section>
  );
}
