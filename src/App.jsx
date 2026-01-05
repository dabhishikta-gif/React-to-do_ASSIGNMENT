// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AddTask from "./Addtask";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: "10px" }}>
//         <Link to="/add-task">Add Task</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<p>Home Page</p>} />
//         <Route path="/add-task" element={<AddTask />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import ActivityHistory from "./pages/ActivityHistory";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <ActivityHistory />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
