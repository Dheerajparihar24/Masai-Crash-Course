export default function TodoItem({ todo, isCompleted, onDelete, onToggle }) {
  return (
    <section className="todo-item">
      <p>{todo}</p>
      <button onClick={onToggle}>
        {isCompleted ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </section>
  );
}
