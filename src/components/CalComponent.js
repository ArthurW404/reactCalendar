import { Calendar } from "calendar";
import React from "react"
import CalDay from "./CalDay";
import CalHeader from "./CalHeader";

class CalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    // build calender
    this.setState({
      cal: this.buildCal()
    })

    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  buildCal = () => {
    let cal = new Calendar();
    let m = cal.monthDays(this.state.date.getFullYear(), this.state.date.getMonth());
    let calMonth = [];
    m.forEach(row => {
      let calRow = [];
      row.forEach( item => {
        calRow.push(<CalDay day={item}/>)
      });
      calMonth.push(calRow);
      calMonth.push(<br/>);
    });
    return calMonth;
  }

  render() {

    return (
      <div>
        {this.state.date.toLocaleTimeString()}
        <CalHeader/>
        {this.state.cal}
      </div>
    )
  }
}

export default CalComponent;