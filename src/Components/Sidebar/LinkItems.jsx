import React from "react";
import {useHistory} from "react-router-dom"

function LinkItems(props) {

  const history=useHistory()
function  handleClick(){
   history.push(props.linkpath)
  }

  return (
    <>
      <li onClick={handleClick}>
        <a href={props.linkpath}>{props.linkname}</a>
      </li>
    </>
  );
}

export default LinkItems;
