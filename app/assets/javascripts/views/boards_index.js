TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  
  template: JST['boards/index'],
  
  tagName: 'ul',
  
  className: 'board-index',
  
  initialize: function() {
    this.listenTo(this.collection, 'sync add', this.render)
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      boards: that.collection
    }));
    that.$el.append(new TrelloClone.Views.BoardsNew().render().$el)
    return this;
  }
  
})