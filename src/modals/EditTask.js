import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskTitle") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  const updateTaskfn = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="taskTitle"
              value={taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              rows="5"
              className="form-control"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={updateTaskfn}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
