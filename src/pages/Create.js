import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [user, setUser] = useContext(UserContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const createId = (e) => {
    setId(e.target.value);
  };
  const createName = (e) => {
    setName(e.target.value);
  };
  const createPosition = (e) => {
    setPosition(e.target.value);
  };
  const createSalary = (e) => {
    setSalary(e.target.value);
  };

  //   add user
  const addUser = (e) => {
    e.preventDefault();
    setUser([
      ...user,
      { id: id, name: name, position: position, salary: salary },
    ]);
  };

  return (
    <>
      <Container>
        <div>
          <h1 className="text-center py-4">Create Users</h1>
          <Form onSubmit={addUser}>
            <label>Id</label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Id"
              name="id"
              value={id}
              onChange={createId}
            />
            <br />
            <label>Name</label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={createName}
            />
            <br />
            <label>Position</label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Position"
              name="position"
              value={position}
              onChange={createPosition}
            />
            <br />
            <label>Salary</label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Salary"
              name="salary"
              value={salary}
              onChange={createSalary}
            />
            {/* button */}
            <button type="submit" className="my-3">
              Create User
            </button>
            <br />
            <Link to="/">Back to home</Link>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default CreateUser;
