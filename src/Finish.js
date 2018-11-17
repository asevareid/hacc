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
        if (this.state.history.length == 3) {
            this.props.history.push('/finish')
        }
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
        var elements = [<SearchBar onClick={this.activateLasers} />, <Cursor onClick={this.activateLasers} />, <Page onClick={this.activateLasers} />, <LinkLinkLink onClick={this.activateLasers} />]
        var element = elements[Math.floor(Math.random() * elements.length)];
        return element

    }

    render() {
        return (
            <div className="App">

                <div class="new">Here's your website so far!</div>
                {this.functionRender(this.props.history[0])}
               
                <div class="container">
                    <div class="item">{this.functionRender(this.props.history[1])}</div>
                    <div class="item">{this.functionRender(this.props.history[2])}</div>


                </div>
            </div>
        );
    }
}

export default (App)