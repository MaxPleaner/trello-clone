TrelloClone.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      board: that.model
    }));
    return this;
  }
  
})