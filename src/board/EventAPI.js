// a pritimive history api
const EventAPI = {
  eventItems: [
    {
      number: 3,
      date: '2014-04-23T18:25:43.511Z',
      shortText: 'Qwer umřel!',
      longText: 'Autoeroticka asfyxiace'
    },
    {
      number: 2,
      date: '2013-04-23T18:25:43.511Z',
      shortText: 'Qwer umřel!',
      longText: 'Spadnul z lamy a zlomil si vaz'
    },
    {
      number: 1,
      date: '2012-04-23T18:25:43.511Z',
      picPath: '',
      shortText: 'Qwer umřel!',
      longText: 'Normálně zakopnul, nechápu'
    }
  ],
  all: function() {
    return this.eventItems;
  },
  get: function(id) {
    const isItem = p => p.number === id;
    return this.eventItems.find(isItem);
  }
};

export default EventAPI;
