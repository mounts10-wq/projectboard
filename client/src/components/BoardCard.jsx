function BoardCard({ board, onDeleteBoard }) {
  return (
    <article className="board-card">
      <div>
        <h3>{board.title}</h3>
        <p className="board-type">{board.hobby_type}</p>
        <p>{board.description || "No description added yet."}</p>
      </div>

      <div className="board-card-actions">
        <button className="danger-button" onClick={() => onDeleteBoard(board.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default BoardCard;