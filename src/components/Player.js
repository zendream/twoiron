import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../App.css';
import PlayerAPI from '../chars/PlayerAPI';

class Player extends Component {
  render() {
    var player = PlayerAPI.get(parseInt(this.props.match.params.number, 10));
    if (!player) {
      return <div>Nenalezen</div>;
    }
    const srcpic = require(`../img/${player.mainPicFilename}`);
    return (
      <div className="content">
        <img className="charPic" src={srcpic} />
        <h1>
          Jméno {player.mainName} ({player.mainClass} : {player.mainTitle})
        </h1>
        <h2>Titul: {player.guildTitle}</h2>
        <h3>Titul: {player.moreText}</h3>
        {player.contact && (
          <div>
            {' '}
            Kontakt:
            <p>
              {player.contact.type} : {player.contact.value}
            </p>
          </div>
        )}

        <Link to="/vlci/roster">
          <Button>Zpět</Button>
        </Link>
      </div>
    );
  }
}

export default Player;
