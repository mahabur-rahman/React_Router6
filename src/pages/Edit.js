import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  //   adit
  const editName = (e) => {
    setName(e.target.value);
    const editedName = name;
    user[0].name = editedName;
  };
  const editPosition = (e) => {
    setPosition(e.target.value);
    const editedPosition = position;
    user[0].position = editedPosition;
  };
  const editSalary = (e) => {
    setSalary(e.target.value);
    const editSalary = salary;
    user[0].salary = editSalary;
  };

  //   edit btn
  const editUser = (e) => {
    e.preventDefault();
    setUsers([...users]);
  };

  const user = users.filter((data) => data.id.toString() === id.toString());
  console.log(user[0]);

  return (
    <div>
      <Container className="py-5">
        <Form onSubmit={editUser}>
          <label className="disabled display-6 my-4">Id : {user[0].id}</label>
          <br />

          <label>Name</label>
          <Form.Control
            size="sm"
            type="text"
            placeholder={user[0].name}
            name="name"
            value={name}
            onChange={editName}
          />
          <br />
          <label>Position</label>
          <Form.Control
            size="sm"
            type="text"
            placeholder={user[0].position}
            name="position"
            value={position}
            onChange={editPosition}
          />
          <br />
          <label>Salary</label>
          <Form.Control
            size="sm"
            type="text"
            placeholder={user[0].salary}
            name="salary"
            value={salary}
            onChange={editSalary}
          />
          {/* button */}
          <button type="submit" className="my-3" onClick={() => editUser}>
            Edit User
          </button>
          <br />
          <Link to="/">Back to home</Link>
        </Form>
      </Container>
    </div>
  );
};

export default Edit;
