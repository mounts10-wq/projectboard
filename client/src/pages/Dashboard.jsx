import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../services/api";
import BoardForm from "../components/BoardForm";
import BoardCard from "../components/BoardCard";

function Dashboard() {
  const { user } = useAuth();

  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBoards();
  }, []);

  async function fetchBoards() {
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest("/boards?page=1&per_page=10");
      setBoards(data.boards);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
   
   async function handleUpdateBoard(boardId, updates) {
     const data = await apiRequest(`/boards/${boardId}`, {
       method: "PATCH",
       body: JSON.stringify(updates),
    });

    setBoards(
       boards.map((board) => (board.id === boardId ? data.board : board))
    );
   }
  async function handleCreateBoard(formData) {
    const data = await apiRequest("/boards", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setBoards([data.board, ...boards]);
  }

  async function handleDeleteBoard(boardId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this board?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await apiRequest(`/boards/${boardId}`, {
        method: "DELETE",
      });

      setBoards(boards.filter((board) => board.id !== boardId));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section>
      <div className="dashboard-header">
        <div>
          <h1>Your Hobby Boards</h1>
          <p>Welcome, {user?.username}. Create boards to organize your projects.</p>
        </div>
      </div>

      <BoardForm onCreateBoard={handleCreateBoard} />

      {loading && <p className="loading-message">Loading boards...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && boards.length === 0 && (
        <p className="empty-state">You do not have any boards yet. Create your first one above.</p>
      )}

      <div className="board-grid">
        {boards.map((board) => (
          <BoardCard
            key={board.id}
            board={board}
            onDeleteBoard={handleDeleteBoard}
            onUpdateBoard={handleUpdateBoard}
          />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;