import React, { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <>
        <NavLink
          className={({ isActive }) => (isActive ? "currentPage" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "currentPage" : "")}
          to={"/movies"}
        >
          Movies
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "currentPage" : "")}
          to={"/articles"}
        >
          Articles
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "currentPage" : "")}
          to={"/reviews"}
        >
          Reviews
        </NavLink>
      </>
    </div>
  );
};

export default Menu;
