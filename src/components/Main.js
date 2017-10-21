import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Events from './Events';
import Roster from './Roster';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/events" component={Events} />
        </Switch>
      </main>
    );
  }
}

export default Main;
