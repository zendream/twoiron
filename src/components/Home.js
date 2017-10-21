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
      </div>
    );
  }
}

export default Home;
