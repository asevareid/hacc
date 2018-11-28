import React, { Component } from 'react';
import searchbar from './searchbar.png';
import refresh from './refresh.png';
class Welcome extends React.Component {
    render() {
        return (
            <div onClick={ () => this.props.onClick('./searchbar')}>
                <img src={searchbar}></img>
            </div>
        )

    }
  }
  Welcome.defaultProps = {
    onClick: () => {}
  }
  export default Welcome;