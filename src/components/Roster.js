import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

class Roster extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/vlci/roster" component={FullRoster} />
        <Route path="/vlci/roster/:number" component={Player} />
      </Switch>
    );
  }
}
export default Roster;
