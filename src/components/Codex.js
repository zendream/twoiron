import React, { Component } from 'react';
import '../App.css';

class Codex extends Component {
  render() {
    return (
      <div className="content">
        <h2 align="center">Kodex železných vlků</h2>
        <div className="kodex">
          <p>Kdo lže, ten krade.</p>
          <p>Kdo krade, roste pro šibenici.</p>
          <p>Kdo roste pro šibenici, určitě se ani fatálního násilí neštítí.</p>
          <p>Žádné vrahy netrpíme.</p>
        </div>
      </div>
    );
  }
}

export default Codex;
