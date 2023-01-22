import React, { useState } from "react";
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

const CreateTask = ({ modal, toggle, save }) => {
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

  const savefn = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
        <Button color="primary" onClick={savefn}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
