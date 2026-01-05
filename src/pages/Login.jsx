import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    login(username);
    navigate("/activity");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input onChange={e => setUsername(e.target.value)} />
      <button disabled={!username}>Login</button>
    </form>
  );
}
