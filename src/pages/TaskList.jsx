import { useEffect, useState } from "react";
import api from "../api";
import TaskItem from "../components/TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/tasks")
      .then(res => setTasks(res.data))
      .catch(() => alert("Error loading tasks"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (tasks.length === 0) return <p>No tasks available today.</p>;

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.every(t => t.status === "Completed") && (
        <p>🎉 All tasks completed!</p>
      )}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
