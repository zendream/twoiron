import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Button } from 'react-bootstrap';
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
        <h2>
          Událost: {ev.number}. - {ev.shortText}
        </h2>
        <h1>Datum: {ev.date}</h1>
        <br />
        <h3>{ev.longText}</h3>
        <div>
          {ev.picPaths.map(p => <Thumbnail src={require(`../img/${p}`)} />)}
        </div>
        <Link to="/vlci/events">
          <Button>Zpět</Button>
        </Link>
      </div>
    );
  }
}

export default EventStory;
