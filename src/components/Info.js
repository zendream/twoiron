import React, { Component } from 'react';
import '../App.css';

class Info extends Component {
  render() {
    return (
      <div className="content">
        <h2>Vítejte na stránkách guildy Železní Vlci</h2>
        <br />
        <p>
          Jsme mladá guilda plna starých otrapů hrajících UO, v některých
          případech i desítky let, a nyní i na shardu Erebor.
        </p>
        <p>Sídlíme poblíž věhlasné vlčí nory pod Šedými přístavy.</p>
        <p>S případnými dotazy se obracejte na vůdce smečky.</p>
        <br />
        <br />
        <br />
        <p>Momentálně nenabízíme žádné služby, nic nebude.</p>
        <p>Nábor je otevřený, leč náročný.</p>
      </div>
    );
  }
}

export default Info;
