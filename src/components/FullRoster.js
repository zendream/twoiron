import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Player from './Player';
import PlayerAPI from '../chars/PlayerAPI';

class FullRoster extends Component {
  render() {
    return (
      <div>
        <ul>
          {PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.mainName}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default FullRoster;
