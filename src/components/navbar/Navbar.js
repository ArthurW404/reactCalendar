import React from "react";
import Dropdown from "./Dropdown";

function Navbar(props) {
  
  const dpItems = [
    "day",
    "month",
    "year",
  ];

  return (
    <div style={{ backgroundColor: "grey", textAlign: "left"}}>
      <Dropdown name="type" items={dpItems} switchHandler={props.switchHandler} />
      <div style={{display:"inline-grid", float:"right"}}>
        -+-
      </div>
    </div>
  )
}

export default Navbar; 