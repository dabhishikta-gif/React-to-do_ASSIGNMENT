import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then(res => setTask(res.data))
      .catch(() => alert("Task not found"));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  const markDone = async () => {
    await api.patch(`/tasks/${id}`, { status: "Completed" });
    setTask({ ...task, status: "Completed" });
  };

  const deleteTask = async () => {
    if (!window.confirm("Delete task?")) return;
    await api.delete(`/tasks/${id}`);
    navigate("/tasks");
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Status: {task.status}</p>
      <button onClick={markDone} disabled={task.status === "Completed"}>
        {task.status === "Completed" ? "✅ Completed" : "Mark as Done"}
      </button>
      <button onClick={deleteTask} style={{ color: "red" }}>
        Delete
      </button>
    </div>
  );
}
