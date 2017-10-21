import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import App from '../App';
import Events from './Events';
import Roster from './Roster';
import Info from './Info';
import Codex from './Codex';
import OriginStory from './OriginStory';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/vlci/info" component={Info} />
          <Route path="/vlci/roster" component={Roster} />
          <Route path="/vlci/events" component={Events} />
          <Route path="/vlci/kodex" component={Codex} />
          <Route path="/vlci/pribeh" component={OriginStory} />
        </Switch>
      </main>
    );
  }
}

export default Main;
