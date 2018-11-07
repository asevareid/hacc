import React, { Component } from 'react';
import searchbar from './searchbar.png';
import cursor from './cursor.png';
class Welcome extends React.Component {
    render() {
        return (
            <div onClick={ () => this.props.onClick ('./cursor')}>
                <img src={cursor}></img>
            </div>
        )

    }
  }
  Welcome.defaultProps = {
    onClick: () => {}
  }
  export default Welcome;