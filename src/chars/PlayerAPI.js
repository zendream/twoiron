// a pritimive player api
const PlayerAPI = {
  players: [
    {
      number: 1,
      mainName: 'Jarka Metelka',
      mainClass: 'Kožrout',
      mainTitle: 'Jelimán',
      mainPicFilename: '2.png',
      morepics: ['1.png'],
      guildTitle: 'Rakvič',
      moreText: 'Sedlák totál',
      contact: { type: 'ICQ', value: '123456789' }
    },
    {
      number: 2,
      mainName: 'Darka Metelka',
      mainClass: 'Lýkožrout',
      mainTitle: 'Kok',
      mainPicFilename: '1.png',
      morepics: [],
      guildTitle: 'Rakvič',
      moreText: 'Sedlák mentál',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    }
  ],
  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;
