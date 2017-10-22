import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PlayerAPI from '../chars/PlayerAPI';
import '../index.css';

class FullRoster extends Component {
  render() {
    return (
      <div className="content">
        <ul>
          {PlayerAPI.all().map(p => (
            <Thumbnail
              key={p.number}
              src={require(`../img/${p.mainPicFilename}`)}
            >
              <h3>{p.mainName}</h3>
              <p>
                {p.mainClass} - {p.mainTitle}
              </p>
              <p>{p.guildTitle}</p>
              <p>
                <Link to={`/vlci/roster/${p.number}`}>
                  <Button bsStyle="primary">Detail</Button>
                </Link>&nbsp;
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip-kontakt">
                      <strong>{p.contact.type}</strong> {p.contact.value}
                    </Tooltip>
                  }
                >
                  <Button bsStyle="default" className="kontaktButton">
                    Kontakt
                  </Button>
                </OverlayTrigger>
              </p>
            </Thumbnail>
          ))}
        </ul>
      </div>
    );
  }
}
export default FullRoster;
