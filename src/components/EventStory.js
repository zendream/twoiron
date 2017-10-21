import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import EventAPI from '../board/EventAPI';

class EventStory extends Component {
  render() {
    var ev = EventAPI.get(parseInt(this.props.match.params.number, 10));
    if (!ev) {
      return <div>Zaznam se zrejme vytratil</div>;
    }
    return (
      <div className="content">
        <h1>
          Událost: {ev.number}. - {ev.shortText}
        </h1>
        <h2>Datum: {ev.date}</h2>
        <h3>Popis: {ev.longText}</h3>
        <Link to="/vlci/events">Back</Link>
      </div>
    );
  }
}

export default EventStory;
