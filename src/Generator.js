import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Cursor from './components/Cursor';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yo: "yo"
    }
  }
  activateLasers = (input) => {
    this.setState({ yo: input })

  }

  functionRender = (history) => {
    console.log(history)
    if (history == './searchbar') {
      return <SearchBar></SearchBar>
    }
    if (history == './cursor') {
      return <Cursor></Cursor>
    }

  }



  render() {
    return (
      <div className="App">
        <div id="organize">
          <header>
            <h1>Pick One!</h1>
          </header>
        </div>
        {this.functionRender(this.state.yo)}
        <SearchBar onClick={this.activateLasers}></SearchBar>
        <Cursor onClick={this.activateLasers}></Cursor>


      </div>
    );
  }
}

export default App