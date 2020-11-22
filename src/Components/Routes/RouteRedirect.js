import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress";

const Redirect = () => {
  return (
  <div className="loading-animation">
      <CircularProgress/>
    </div>
  );
};

export default Redirect;
