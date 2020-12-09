import React from "react"

function CalHeader() {
  const style = {
    padding: 20,
    border: "1px solid black",
    backgroundColor: "grey",
    font: 10,
    height: 50,
    width: 50,
    display: "inline-grid",
  };

  return (
    <div>
      <strong style={style}>Sun</strong>
      <strong style={style}>Mon</strong>
      <strong style={style}>Tue</strong>
      <strong style={style}>Wed</strong>
      <strong style={style}>Thu</strong>
      <strong style={style}>Fri</strong>
      <strong style={style}>Sat</strong>
    </div>
  )  
}

export default CalHeader;