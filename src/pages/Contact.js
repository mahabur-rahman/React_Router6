import React from "react";
import { Routes, Route } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact page</h1>
      <Routes>
        <Route path="/hello" element={<h1>Hello World</h1>} />
      </Routes>
    </>
  );
};

export default Contact;
