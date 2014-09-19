TrelloClone.Views.CardsNew = Backbone.View.extend({
  
  tagName: "section",
  
  className: "newCard",
  
  template: JST['cards/new'],
  
  events: {
    "submit .new_card": "makeCard"
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
    }));
    return this;
  },
  
  makeCard: function (event) {
    event.preventDefault();
    event.stopPropagation();
    var params = $(event.currentTarget).serializeJSON();
    params.card.list_id = this.model.id;
    var card = new TrelloClone.Models.Card(params['card']);
    var that = this;
    card.save({}, {
      success: function () {
        TrelloClone.Collections.cards.add(card);
        that.model.cards().add(card);
        // Backbone.history.navigate("boards/" + that.model.id, { trigger: true });
      }
    });
  }

})

    
