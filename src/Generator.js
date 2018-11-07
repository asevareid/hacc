import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Cursor from './components/Cursor';
import Page from './components/Page';
import LinkLinkLink from './components/LinkLinkLink';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    }
  }
  activateLasers = (input) => {
    this.setState(prevState => ({
      history: [...prevState.history, input]
    }))
  }

  functionRender = (history) => {
    console.log(history)
    if (history == './searchbar') {
      return <SearchBar></SearchBar>
    }
    if (history == './cursor') {
      return <Cursor></Cursor>
    }
    if (history == './page') {
      return <Page></Page>
    }
    if (history == './linklinklink') {
      return <LinkLinkLink></LinkLinkLink>
    }
  }

functionGenerate = () => {
var elements = [<SearchBar onClick={this.activateLasers}/>,<Cursor onClick={this.activateLasers} />,<Page onClick={this.activateLasers}/>,<LinkLinkLink onClick={this.activateLasers}/>]
var element = elements [Math.floor(Math.random()*elements.length)];
return element

}

  render() {
    return (
      <div className="App">
        <div id="organize">
          <header>
            <h3>Pick One!</h3>
          </header>
        </div>
       
        {/* <SearchBar onClick={this.activateLasers}></SearchBar>
        <Cursor onClick={this.activateLasers}></Cursor> */}

        {
          this.functionGenerate() 
        }
        {
          this.functionGenerate ()
        }

<h1>chosen</h1>
{
  this.state.history.map((currentHistory) => this.functionRender(currentHistory))
}      </div>
    );
  }
}

export default App