// a pritimive history api
const EventAPI = {
  eventItems: [
    {
      number: 2,
      date: '22. října 2017 21:58',
      picPath: '',
      shortText: 'Rozjetá produkční verze stránek',
      longText:
        'Inu, už se to dá používat, heč. Čas dopsat příbeh a požádat o šutr.',
      picPaths: []
    },
    {
      number: 1,
      date: '20. října 2017 21:58',
      picPath: '',
      shortText: 'Rozjetá první verze stránek',
      longText:
        'První prototyp, reactjs+bootstrap jako npm SPA pro freeckovy heroku servricek.',
      picPaths: []
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
