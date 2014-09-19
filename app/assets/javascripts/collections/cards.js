TrelloClone.Collections.Cards = Backbone.Collection.extend({
  
  model: TrelloClone.Models.Card,
  
  url: 'api/cards',
  
  comparator: function(card) {
    return card.get('ord');
  },
  
  getOrFetch: function (id) {
    var cardMatch = this.get(id);
    if (!cardMatch) {
      cardMatch = new TrelloClone.Models.Card({
        id: id
      });
      var that = this;
      cardMatch.fetch({
        success: function () {
          that.add(cardMatch);
        }
      });
    }
    return cardMatch;
  }
  
});

TrelloClone.Collections.cards = new TrelloClone.Collections.Cards();