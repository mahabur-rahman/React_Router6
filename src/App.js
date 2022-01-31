import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom scss
import "./style.scss";
import { Route, Routes, Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
