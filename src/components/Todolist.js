import React, { useEffect, useState } from "react";
import CreateTask from "../modals/createTask";
import Card from "./Card1";
import Navbar from "./Navbar";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    //localStorage.removeItem("taskList");
    setModal(false);
    setTaskList(tempList);
  };
  return (
    <>
      {/* <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div> */}
      {/* <Navbar /> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Todo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <button
                className="btn btn-primary"
                onClick={() => setModal(true)}
              >
                Create Task
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={linkStyle} to="/completed">
                Completed
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            //<li>{obj.Name}</li>
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
