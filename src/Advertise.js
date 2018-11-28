import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import runningman from './runningman.gif';
import './App.css';
import Options from './Options';
import Generator from './Generator';
import background from './background.png';

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
        <div className="App home">
        <div id="info">
        </div>
        </div>
      );
    }
  }

  export default (App)
