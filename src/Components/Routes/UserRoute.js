import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import RouteRedirect from "./RouteRedirect"

const UserRoute =  ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
   <RouteRedirect/>
  );
  
};

export default UserRoute;
