// a pritimive player api
const PlayerAPI = {
  players: [
    {
      number: 1,
      mainName: 'El',
      mainClass: 'Zloděj',
      mainTitle: 'Kapsář',
      mainPicFilename: 'el1.png',
      morePics: [],
      guildTitle: 'Vůdce smečky',
      moreText: 'Hlavní kraft - carp tink max, bs 92, specka na crushing',
      contact: { type: 'ICQ', value: '289107351' }
    },
    {
      number: 2,
      mainName: 'Forsaken',
      mainClass: 'Magič',
      mainTitle: 'Mudrc',
      mainPicFilename: 'forsaken1.png',
      morePics: [],
      guildTitle: 'Zakládajíci člen',
      moreText: '',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    },
    {
      number: 3,
      mainName: 'Smoulinka',
      mainClass: 'Nekro',
      mainTitle: 'Trápitel',
      mainPicFilename: 'qwer1.png',
      morePics: [],
      guildTitle: 'Hlavní rakvič',
      moreText: '',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    },
    {
      number: 4,
      mainName: 'Mac',
      mainClass: 'Nekro',
      mainTitle: 'trýznitel',
      mainPicFilename: 'mac1.png',
      morePics: [],
      guildTitle: 'Zakládající člen',
      moreText: '',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    },
    {
      number: 5,
      mainName: 'Crowley',
      mainClass: 'Nekro',
      mainTitle: 'mučitel',
      mainPicFilename: 'bino1.png',
      morePics: [],
      guildTitle: 'Afkovač 24/7',
      moreText:
        'S oblibou je dlouhodobě neaktivní, načež se těší, kolik naexpil',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    },
    {
      number: 6,
      mainName: 'Felix',
      mainClass: 'Zloděj',
      mainTitle: 'lupíč',
      mainPicFilename: 'felix1.png',
      morePics: [],
      guildTitle: 'Zakládající člen',
      moreText: '',
      contact: { type: 'Neveřejný', value: ' kontaktujte ve hře' }
    },
    {
      number: 7,
      mainName: 'Freya',
      mainClass: 'Magič',
      mainTitle: 'krotitel',
      mainPicFilename: 'olda1.png',
      morePics: [],
      guildTitle: 'Zakládající člen',
      moreText: '',
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
