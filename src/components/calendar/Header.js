import React from "react"

function Header(props) {
  const headingStyle = {
    backgroundColor: "white",
    width: 645,
    margin: "auto"
  }

  const infoStyle = {
    margin: "0px 20px"
  }

  return (
    <div style={headingStyle}>
      <span 
        onClick={() => props.clickHandler(-1)}
        style={ {float: "left"} }
        className="button"
      >
        left
      </span>

      <span style={infoStyle}>{props.data.date.toLocaleTimeString()}</span>
      <span style={infoStyle}>M: {props.data.currMonth + 1}</span>
      <span style={infoStyle}>{props.data.currYear}</span>

      <span 
        onClick={() => props.clickHandler(1)}
        className="button"
        style={ {float: "right"} }
      >
        right
      </span>
    </div>
  );
}

export default Header;