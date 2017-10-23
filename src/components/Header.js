import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Železní vlci</h1>
        <ul className="header">
          <li>
            <NavLink to="/vlci/info" activeClassName="active">
              Hlavní stránka
            </NavLink>
          </li>
          <li>
            <NavLink to="/vlci/roster" activeClassName="active">
              Členové
            </NavLink>
          </li>
          <li>
            <NavLink to="/vlci/events" activeClassName="active">
              Události
            </NavLink>
          </li>
          <li>
            <NavLink to="/vlci/pribeh" activeClassName="active">
              Příběh
            </NavLink>
          </li>
          <li>
            <NavLink to="/vlci/kodex" activeClassName="active">
              Kodex
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
