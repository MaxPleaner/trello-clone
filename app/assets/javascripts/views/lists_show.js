TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  
  tagName: 'li',
  
  className: 'listShow',
  
  template: JST['lists/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.model.cards().each(this.addCard.bind(this));
    var newCardView = new TrelloClone.Views.CardsNew({
      model: this.model
    });
    this.addSubview('.new-card', newCardView);
    // that.$el.append(newCardView.render().$el);
  },
  
  events: {
    "click .delete-list": "deleteList" 
  },
  render: function () {
    var that = this;
    that.$el.html(that.template({
      list: that.model
    }));
    this.attachSubviews();
    return this;
  },  

   deleteList: function (event) {
     event.preventDefault();
     // var redirectUrl = "boards/" + this.model.id;
     this.model.destroy();
      // Backbone.history.navigate(redirectUrl, { trigger: true });
   },
   
   addCard: function (card) {
     var cardShow =
       new TrelloClone.Views.CardsShow({ model: card });
     this.addSubview(".cards", cardShow);
   },
      
   removeCard: function (card) {
     var subview = _.find(
       this.subviews(".cards"),
       function (subview) {
         return subview.model === card;
       }
     );

     this.removeSubview(".cards", subview);
   },
  
})
