import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../img/logo.gif';
import '../App.css';
import Home from './Home';
import History from './History';
import Roster from './Roster';
import { Tabs, Tab, Button } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/history" component={History} />
        </Switch>
      </main>
    );
  }
}

export default Main;
