import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board';
import EventStory from './EventStory';

class Events extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/vlci/events" component={Board} />
        <Route path="/vlci/events/:number" component={EventStory} />
      </Switch>
    );
  }
}
export default Events;
