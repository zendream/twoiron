import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HistoryAPI from '../board/HistoryAPI';

class HistoryBoard extends Component {
  render() {
    return (
      <div>
        <ul>
          {HistoryAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/history/${p.number}`}>
                {' '}
                {p.date} - {p.shortText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HistoryBoard;
