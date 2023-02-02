import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/Todolist";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
//import CompletedTask from "./components/completedTasks";
import Postlist from "./components/Postlist";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>

      <Route path="/todolist" element={<TodoList />}></Route>
      <Route path="/postlist" element={<Postlist />}></Route>
    </Routes>
  );
}

export default App;
