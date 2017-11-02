import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Thumbnail, Panel } from 'react-bootstrap';
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
        <table>
          <tr>
            <td>
              <Thumbnail className="charPic" src={srcpic} />
            </td>
            <td>
              <Panel>
                <h2>
                  {player.mainName} ({player.mainClass} : {player.mainTitle})
                </h2>
                <h1 className="playerInfo">Hodnost: {player.guildTitle}</h1>
                <h1 className="playerInfo">{player.moreText}</h1>
                <br />
                <h1 className="playerInfo">
                  Další postavy:&nbsp;
                  {player.moreChars.join(', ')}
                </h1>
                <br />
                {player.contact && (
                  <div>
                    {' '}
                    <p>Kontakt:</p>
                    {player.contact.type} : {player.contact.value}
                  </div>
                )}
              </Panel>
            </td>
          </tr>
        </table>
        <div>
          {player.morePics.map(p => (
            <Thumbnail alt="dalsi fotka postavy" src={require(`../img/${p}`)} />
          ))}
        </div>

        <Link to="/vlci/roster">
          <Button>Zpět</Button>
        </Link>
      </div>
    );
  }
}

export default Player;
