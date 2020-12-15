import React from "react";
import "./Navbar.css";

function Dropdown(props) {

  const itemComp = props.items.map(
    item => <span onClick={() => props.switchHandler(item)}>{item}</span>
  );

  return (
    <div class="dropdown">
      <button class="dropbtn">{props.name}</button>
      <div class="dropdownContent">
        {itemComp}
      </div>
    </div>
  )
}

export default Dropdown;