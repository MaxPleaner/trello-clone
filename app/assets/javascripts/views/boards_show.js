TrelloClone.Views.BoardsShow = Backbone.View.extend({
  
  template: JST['boards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add', this.render)
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      board: that.model
    }));
    return this;
  }
  
})