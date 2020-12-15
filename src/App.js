// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MonthCal from './components/calendar/MonthCal';
import React from "react";
import DayCal from './components/DayCal';
import YearCal from './components/YearCal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      curCal: <MonthCal />
    }
  }

  switchCal = state => {
    let comp;
    switch (state) {
      case "day":
        comp = <DayCal />;
        break;
      case "month":
        comp = <MonthCal />;
        break;
      case "year":
        comp = <YearCal />;
        break;
      default:
        return;
    }

    this.setState({
      curCal: comp
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar switchHandler={this.switchCal}/>
        {this.state.curCal}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    )
  }

}

export default App;
