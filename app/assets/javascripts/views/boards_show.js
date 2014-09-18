TrelloClone.Views.BoardsShow = Backbone.View.extend({
  
  template: JST['boards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
    this.listenTo(this.model.lists(), "add", this.render);
  },
  
  events: {
    "click button.delete": "delete"
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      board: that.model
    }));
    return this;
  },
  
  delete: function (event) {
    event.preventDefault();
    var confirmation = confirm("are you sure?");
    if (confirmation === true) {
      this.model.destroy();
      Backbone.history.navigate("#", { trigger: true });
    }
  }
  
})