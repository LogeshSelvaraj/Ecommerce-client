import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import {useSelector} from "react-redux"

const NavLeftItems =() =>{

    const {user}=useSelector((state)=>({...state}))
    
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link navbar-myicon" href={user&&user.role==="admin" ? "/admin/dashboard" : "/"}>
            <HomeIcon />
            <span className="navbar-icon-title">Home</span>
          </a>
        </li>
        { user&&!user.role==="admin"&&<li className="nav-item  ">
          <a className="nav-link navbar-myicon" href="/">
          <span className="coloring">
          <CategoryIcon />
            <span className="navbar-icon-title">Categories</span>
          </span>
          </a>
        </li> } 
      </ul>
    );

}

export  default  NavLeftItems