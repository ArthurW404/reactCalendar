import React from "react"
import "./Calendar.css"

function CalHeader() {
  return (
    <div>
      <strong className="calItem">Sun</strong>
      <strong className="calItem">Mon</strong>
      <strong className="calItem">Tue</strong>
      <strong className="calItem">Wed</strong>
      <strong className="calItem">Thu</strong>
      <strong className="calItem">Fri</strong>
      <strong className="calItem">Sat</strong>
    </div>
  )  
}

export default CalHeader;