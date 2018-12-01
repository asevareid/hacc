import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import runningman from './runningman.gif';
import './App.css';
import Options from './Options';
import Generator from './Generator';
import Advertise from './Advertise';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      yo: 'yo',
    };
  }
  activateLasers = () => {
    this.setState ({yo: this.state.yo + 'o'});
  };


  render () {

    var links =[]
    for (var i =1; i<= 28; i++)  {
      links.push({ key: i, href: `/${i}`})
    }

    return (

      <div className="App home">
        <div class="list">
        <h2>Websites created</h2>
        {links.map(l => (
          <div><a href={l.href} >Website {l.key}</a></div>
        ))}


        </div>

        <div id="organize">
          <img src={runningman} width="800px" height="500px" />
          <header>
            <h1>error for oh for</h1>
          </header>
        </div>
        <div>
          <a href="/options" id="homelink">There's no website here</a>
        </div>

      </div>
    );
  }
}

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route path="/" exact component={App} />
      <Route path="/options/" component={Options} />

      <Route path="/Generator/" component={Generator} />
      <Route path="/Advertise/" component={Advertise} />
    </Fragment>
  </Router>
);

export default AppRouter;
