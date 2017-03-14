import React, { Component } from 'react';
import './App.css';
import Nav from './Header/navBar';
import Video from './Video/index';

class App extends Component {
  render() {
    return (    
      <div className="App">
            <Nav />
            <div className='child'>
            	{ this.props.children || <Video /> }
            </div>
      </div>
    );
  }
}

export default App;
