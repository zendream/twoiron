import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventAPI from '../board/EventAPI';

class Board extends Component {
  render() {
    return (
      <div>
        <ul>
          {EventAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/events/${p.number}`}>
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
export default Board;
