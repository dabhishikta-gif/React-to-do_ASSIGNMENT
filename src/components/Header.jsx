import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={styles.header}>
      <h2>📝 Task Tracker</h2>

      <nav style={styles.nav}>
        <Link to="/tasks">Tasks</Link>
        <Link to="/add-task">Add Task</Link>
        <Link to="/activity">Activity</Link>
      </nav>

      <div style={styles.right}>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {user ? (
          <>
            <span style={{ marginLeft: 10 }}>
              Hello, {user.username}
            </span>
            <button onClick={logout} style={{ marginLeft: 10 }}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ marginLeft: 10 }}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc"
  },
  nav: {
    display: "flex",
    gap: "15px"
  },
  right: {
    display: "flex",
    alignItems: "center"
  }
};
