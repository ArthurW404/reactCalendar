import React from "react";
import "./Calendar.css";

class CalDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: this.props.color,
        opacity: 0.95,
      },
    }
  }

  onHover = (isHover) => {
    if (isHover) {
      this.setState( {
        style: {
          backgroundColor: this.props.color,
          opacity: 0.8,
        }
      })
    } else {
      this.setState( {
        style: {
          backgroundColor: this.props.color,
          opacity: 0.95,
        }
      })
    }
  }

  render () {
    return (
      <div 
        className="calItem"
        style={this.state.style}
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
      >
        {this.props.day !== 0 ? this.props.day : "_"}
      </div>
    );
  }
}

export default CalDay;