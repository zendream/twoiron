import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import EventAPI from '../board/EventAPI';

class Board extends Component {
  render() {
    return (
      <div className="content">
        <ul>
          {EventAPI.all().map(p => (
            <li key={p.number}>
              <Panel>
                <p>
                  <Link to={`/vlci/events/${p.number}`}>
                    {' '}
                    {p.number}. - {p.shortText}
                  </Link>
                </p>
                <p>{p.date}</p>
              </Panel>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Board;
