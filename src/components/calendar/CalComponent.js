import { Calendar } from "calendar";
import React from "react"
import CalDay from "./Day";
import CalHeader from "./ColumnTitle";
import Header from "./Header";

class CalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      currMonth: 0,
      currYear: 0,
      cal: null,
    }
  }

  // runned when component is loaded
  componentDidMount() {
    // build calender
    const currMonth = this.state.date.getMonth();
    const currYear = this.state.date.getFullYear();
    const c = this.buildCal(currMonth, currYear);
    this.setState({
      currMonth: currMonth,
      currYear: currYear,
      cal: c,
    })

    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick = () => {
    const newDate = new Date();
    this.setState({
      date: newDate
    })
  }

  buildCal = (month, year) => {
    const cal = new Calendar();
    const m = cal.monthDays(year, month);
    const calMonth = m.map((row) => {
      const newRow = row.map((item) => {
        if (
          item === this.state.date.getDate() &&
          month === this.state.date.getMonth() &&
          year === this.state.date.getFullYear()
        ) {
          return <CalDay day={item} color="green" />;
        }
        return <CalDay day={item} color="white" />;
      })
      return (
        <div>
          {newRow}
          <br />
        </div>
      );
    });
    return calMonth;
  }

  changeMonth = num => {
    console.log(num);
    this.setState(prevState => {
      let newMonth = prevState.currMonth + num;
      let newYear = prevState.currYear;
      if (newMonth >= 12) {
        newYear++;
        newMonth = newMonth % 12;
      }

      if (newMonth < 0) {
        newYear--;
        newMonth = newMonth + 12;
      }

      const newCal = this.buildCal(newMonth, newYear);
      return {
        currMonth: newMonth,
        currYear: newYear,
        cal: newCal
      }
    });
  }

  render() {
    const style = {
      margin: "auto",
      marginTop: 20,
      whiteSpace: "nowrap",
    }

    return (
      <div style={style}>
        <Header clickHandler={this.changeMonth} data={this.state} />
        <CalHeader />
        {this.state.cal}
      </div>
    )
  }
}

export default CalComponent;