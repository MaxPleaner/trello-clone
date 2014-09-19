TrelloClone.Views.CardsShow = Backbone.View.extend({
  
  tagName: 'li',
  
  className: 'cardShow',
  
  template: JST['cards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
  },
  
  events: {
    "click .deleteCard": "deleteCard"
  },
  
  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      card: that.model
    }));
    return this;
  },

})

    
