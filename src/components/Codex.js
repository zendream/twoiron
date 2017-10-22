import React, { Component } from 'react';
import '../App.css';

class Codex extends Component {
  render() {
    return (
      <div className="content">
        <h2 align="center">Kodex</h2>
        <ul className="kodex">
          <li>Kdo lže, ten krade.</li>
          <li>Kdo krade, roste pro šibenici.</li>
          <li>
            Kdo roste pro šibenici, určitě se ani fatálního násilí neštítí.
          </li>
          <li>Žádné vrahy netrpíme.</li>
        </ul>
      </div>
    );
  }
}

export default Codex;
