import React from 'react'
import {Nav,NavLink} from "react-bootstrap"

import "./sidebar.css"

const sidebar=()=>{

    return (
     
          <div id="admin-sidebar" class="col-lg-2 col-md-3">
            <ul class="sidenav admin-sidenav list-unstyled">
              <li>
                <a href="/mycart">My cart</a>
              </li>
              <li>
                <a href="/whislist">Whilist</a>
              </li>
              <li>
                <a href="/user/myorders">My Orders</a>
              </li>
              <li>
                <a href="/user/myaccount">My account</a>
              </li>
            </ul>
          </div>
    )
}

export default sidebar