import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import runningman from './runningman.gif';
import './App.css';
import Options from './Options';
import Generator from './Generator';

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


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      
      <Route path="/" exact component={App} />
      <Route path="/options/" component={Options} />
      <Route path="/Generator/" component={Generator} />
    </div>
  </Router>
);

export default AppRouter;