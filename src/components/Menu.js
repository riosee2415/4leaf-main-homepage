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
            <span>HOME</span>
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/About"
          >
            <span>ABOUT</span>
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/Project"
          >
            <span>OFFER</span>
          </NavLink>
        </li>
        <li className="menuItems">
          <NavLink
            className="link"
            activeClassName={"menu__active"}
            exact
            to="/Contect"
          >
            <span>CONTECT</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
