import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await api.post("/tasks", {
      title,
      status: "Pending",
      createdAt: new Date().toLocaleString()
    });

    navigate("/tasks");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Task</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button disabled={!title.trim()}>Add</button>
    </form>
  );
}
