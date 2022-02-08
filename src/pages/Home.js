import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col, Table } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col>
            <Link to="/create">
              <Button variant="primary" className="mb-5">
                Create User
              </Button>
            </Link>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((u) => {
                  return (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.position}</td>
                      <td>{u.salary}</td>
                      <td>
                        <Link to={`/read/${u.id}`}>
                          <button>Read</button>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/edit/${u.id}`}>
                          <button>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/delete/${u.id}`}>
                          <button>Delete</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
