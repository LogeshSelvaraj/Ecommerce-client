import React from "react";

function LinkItems(props) {
  return (
    <>
      <li>
        <a href={props.linkpath}>{props.linkname}</a>
      </li>
    </>
  );
}

export default LinkItems;
