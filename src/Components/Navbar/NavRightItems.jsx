import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {useSelector} from "react-redux"
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import DropDown from "./DropDown";

const NavRightItems = () => {
  const user=useSelector((state)=> state.user)
  return (
    <ul className="navbar-nav ">
      {!user &&
      <>
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
      </>
       } {user && <DropDown /> }
    </ul>
  );
};

export default NavRightItems;
