TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  
  template: JST['lists/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.model.cards().each(this.addCard.bind(this));
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      list: that.model
    }));
    this.attachSubviews();
    return this;
  },
  
  addCard: function (card) {
     var cardShow =
       new TrelloClone.Views.CardsShow({ model: card });
     this.addSubview(".cards", cardShow);
   },
  
})
