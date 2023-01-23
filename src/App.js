import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/Todolist";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>

      <Route path="Todolist" element={<TodoList />}></Route>
    </Routes>
  );
}

export default App;
