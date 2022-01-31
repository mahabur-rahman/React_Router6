import React from "react";
// react router dom
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(menu) => (menu.isActive ? "active_menu" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(menu) => (menu.isActive ? "active_menu" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(menu) => (menu.isActive ? "active_menu" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
