import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    { id: 1, name: "Mahabur Rahman", position: "Frontend", salary: "25000" },
    { id: 2, name: "John Doe", position: "Full Stack", salary: "45000" },
    { id: 3, name: "Saymun Khan", position: "Frontend", salary: "25000" },
  ]);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
