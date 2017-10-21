import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import HistoryAPI from '../board/HistoryAPI';
import { Tabs, Tab } from 'react-bootstrap';

class Player extends Component {
  render() {
    var story = HistoryAPI.get(parseInt(this.props.match.params.number, 10));
    if (!story) {
      return <div>Záznam se zřejmě vytratil</div>;
    }
    return (
      <div>
        <h1>
          Událost: {story.number}. - {story.shortText}{' '}
        </h1>
        <h2>Datum: {story.date}</h2>
        <h3>Popis: {story.longText}</h3>
        <Link to="/history">Back</Link>
      </div>
    );
  }
}

export default Player;
