import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const deleteUser = (id) => {
    const user = users.filter((data) => data.id.toString() !== id.toString());
    setUsers(user);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary" onClick={() => deleteUser(id)}>
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;
