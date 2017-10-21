// a pritimive player api
const PlayerAPI = {
  players: [
    {
      number: 1,
      mainName: 'Jarka Metelka',
      mainClass: 'Kožrout',
      mainTitle: 'Jelimán',
      mainPicFilename: 'jarkametelka.png',
      guildTitle: 'Rakvič',
      moreText: 'Sedlák totál',
      contact: [
        {
          type: 'ICQ',
          value: '123456789'
        }
      ]
    },
    {
      number: 2,
      mainName: 'Darka Metelka',
      mainClass: 'Lýkožrout',
      mainTitle: 'Kok',
      mainPicFilename: 'darkametelka.png',
      guildTitle: 'Rakvič',
      moreText: 'Sedlák mentál',
      contact: [
        {
          type: 'email',
          value: 'vololo@lolo.lol'
        }
      ]
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