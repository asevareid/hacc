import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import runningman from './runningman.gif';
import './App.css';
import searchbar from './searchbar.png';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      yo: "yo"
    }
  }
  activateLasers = () => {
    this.setState({yo: this.state.yo + "o"})

  }

  render() {
    return (
      <div className="App">
      <div id="organize">
         <header>
          <h1>Want to make one?</h1>
        </header>
      </div>
      <Link to="/">Yes</Link>

      <Link to="/">No</Link>

      </div>
    );
  }
}

export default App