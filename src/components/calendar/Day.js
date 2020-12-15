import React from "react";
import "./Calendar.css";

class CalDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.95,
    }
  }

  onHover = (isHover) => {
    if (isHover) {
      this.setState( {
        opacity: 0.8,
      })
    } else {
      this.setState( {
        opacity: 0.95,
      })
    }
  }

  render () {
    const style = {
      opacity: this.state.opacity,
      backgroundColor: this.props.color,
    }

    return (
      <div 
        className="calItem"
        style={style}
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
      >
        {this.props.day !== 0 ? this.props.day : "_"}
      </div>
    );
  }
}

export default CalDay;