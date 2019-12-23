import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="navBar">
      <ul className="menu">
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/About"
          >
            ABOUT
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/Project"
          >
            PROJECT
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/Contect"
          >
            CONTECT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
