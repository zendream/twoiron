import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Home from './components/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/vlci/" component={Home} />
      </Switch>
    );
  }
}

export default App;
