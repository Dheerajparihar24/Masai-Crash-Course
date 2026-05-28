import { useState } from "react";
function NoteCard({ note, onDelete, onUpdate }) {
  const { id, title, description, createdAt } = note;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdateDescription] = useState(description);

  const handleSave = () => {
    onUpdate(id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Update Title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="Update Description"
            value={updatedDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          ></textarea>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3 className="title">{title}</h3>
          <p>Created: {createdAt}</p>
          <p className="description">Description: {description}</p>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default NoteCard;
