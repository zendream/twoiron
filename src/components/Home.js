import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <div className="footer">Made by @zendream 2017 MIT license</div>
      </div>
    );
  }
}

export default Home;
