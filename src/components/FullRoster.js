import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
