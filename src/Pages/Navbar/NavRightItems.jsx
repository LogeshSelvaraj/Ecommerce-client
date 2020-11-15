import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import DropDown from "./DropDown"

const NavRightItems = () => {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link navbar-myicon" href="/login">
          <PersonIcon />
          <span className="navbar-icon-title">Login</span>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link navbar-myicon" href="/register">
          <PersonAddIcon />
          <span className="navbar-icon-title"></span>
          Register
        </a>
      </li>
        <DropDown/>
    </ul>
  );
};

export default NavRightItems;