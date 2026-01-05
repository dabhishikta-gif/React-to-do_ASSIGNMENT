import { Link } from "react-router-dom";

export default function TaskItem({ task }) {
  const isCompleted = task.status === "Completed";

  return (
    <div style={styles.card}>
      <h4>{task.title}</h4>

      <span
        style={{
          ...styles.badge,
          backgroundColor: isCompleted ? "green" : "orange"
        }}
      >
        {task.status}
      </span>

      <div>
        <Link to={`/tasks/${task.id}`}>View Details</Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px"
  },
  badge: {
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px"
  }
};
