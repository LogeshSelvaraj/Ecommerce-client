import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";


const NavLeftItems =() =>{

    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link navbar-myicon" href="#">
            <HomeIcon />
            <span className="navbar-icon-title">Home</span>
          </a>
        </li>
        <li className="nav-item  ">
          <a className="nav-link navbar-myicon" href="#">
            <CategoryIcon />
            <span className="navbar-icon-title">Categories</span>
          </a>
        </li>
      </ul>
    );

}

export  default  NavLeftItems