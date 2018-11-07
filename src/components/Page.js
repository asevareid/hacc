import React, { Component } from 'react';
import searchbar from './searchbar.png';
import page from './page.png';
class Welcome extends React.Component {
    render() {
        return (
            <div onClick={ () => this.props.onClick ('./page')}>
                <img src={page}></img>
            </div>
        )

    }
  }
  Welcome.defaultProps = {
    onClick: () => {}
  }
  export default Welcome;