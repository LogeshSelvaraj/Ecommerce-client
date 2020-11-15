import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const DropDown =() =>{

    return (
      <li className="nav-item dropdown ">
        <a
          className="nav-link dropdown-toggle navbar-myicon disabled"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <PersonOutlineIcon />
          <span className="navbar-icon-title">Username</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Your Account
          </a>
          <a className="dropdown-item" href="#">
            Your Orders
          </a>
          <a className="dropdown-item" href="#">
            Log Out
          </a>
        </div>
      </li>
    );

}

export default DropDown