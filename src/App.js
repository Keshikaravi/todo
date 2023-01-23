import logo from "./logo.svg";
import "./App.css";
//import TodoList from "./components/Todolist";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
