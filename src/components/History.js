import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HistoryBoard from './HistoryBoard';
import Story from './Story';

class History extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/history" component={HistoryBoard} />
        <Route path="/history/:number" component={Story} />
      </Switch>
    );
  }
}
export default History;
