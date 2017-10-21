import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.gif';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Simple SPA</h1>
        <ul className="header">
          <li>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/roster" activeClassName="active">
              Clenove
            </Link>
          </li>
          <li>
            <Link to="/events" activeClassName="active">
              Historie
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
