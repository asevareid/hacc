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
       <img src={runningman} width="800px" height="500px"></img>
         <header>
          <h1>error for oh for</h1>
        </header>
      </div>
<a href="/options">There's no website here</a>

      </div>
    );
  }
}

export default App;
