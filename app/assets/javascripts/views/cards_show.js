TrelloClone.Views.CardsShow = Backbone.View.extend({
  
  tagName: 'section',
  
  className: 'card-show',
  
  template: JST['cards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      card: that.model
    }));
    return this;
  },

})
