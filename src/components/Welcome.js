import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import img from '../img/wolfhead.jpg';

class Welcome extends Component {
  render() {
    return (
      <Link to="/vlci/info">
        <div className="splashContainer">
          <img className="splashImg" src={img} />
        </div>
      </Link>
    );
  }
}

export default Welcome;
