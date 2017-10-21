import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PlayerAPI from '../chars/PlayerAPI';

class Player extends Component {
  render() {
    var player = PlayerAPI.get(parseInt(this.props.match.params.number, 10));
    if (!player) {
      return <div>Nenalezen</div>;
    }
    const srcz = require(`../img/${player.mainPicFilename}`);
    const srcx = require('../img/jarkametelka.png');
    return (
      <div className="content">
        <img src={srcz} />
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

        <Link to="/vlci/roster">Back</Link>
      </div>
    );
  }
}

export default Player;
