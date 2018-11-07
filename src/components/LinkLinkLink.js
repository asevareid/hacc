import React, { Component } from 'react';
import searchbar from './searchbar.png';
import linklinklink from './linklinklink.png';
class Welcome extends React.Component {
    render() {
        return (
            <div onClick={ () => this.props.onClick ('./linklinklink')}>
                <img src={linklinklink}></img>
            </div>
        )

    }
  }
  Welcome.defaultProps = {
    onClick: () => {}
  }
  export default Welcome;