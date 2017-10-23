import React, { Component } from 'react';
import '../App.css';

class Codex extends Component {
  render() {
    const derps = [
      'Dodržuj pravidla shardu i tento kodex.',
      'Pomáhej kolegům, polituj ostatní.',
      'Paktování s Mordorem neschvalujeme.',
      'Prasení zakázáno - netřeba definovat.'
    ];
    return (
      <div className="content">
        <h2 align="center">Kodex železných vlků</h2>
        <div className="kodex">{derps.map(d => <h3>{d}</h3>)}</div>
      </div>
    );
  }
}

export default Codex;
