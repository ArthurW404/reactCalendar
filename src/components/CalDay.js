import React from "react"

function CalDay(props) {
  const style = {
    padding: 20,
    border: "1px solid black",
    backgroundColor: "grey",
    font: 10,
    height: 50,
    width: 50,
    display: "inline-grid",
  }
  
  return (
    <div style={style}>{props.day}</div>
  );
}

export default CalDay;