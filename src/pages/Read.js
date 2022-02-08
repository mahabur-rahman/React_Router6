import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const ReadComp = () => {
  const history = useHistory();
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const readUser = users.filter((data) => data.id.toString() === id.toString());
  console.log(readUser);
  return (
    <div>
      <h4>Id : {readUser[0].id}</h4>
      <h4>Name : {readUser[0].name}</h4>
      <h4>Position : {readUser[0].position}</h4>
      <h4>Salary : {readUser[0].salary}</h4>
      <button onClick={() => history.push("/")}>Back to Home</button>
    </div>
  );
};

export default ReadComp;
