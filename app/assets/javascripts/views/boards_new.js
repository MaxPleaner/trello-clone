TrelloClone.Views.BoardsNew = Backbone.View.extend({
  
    template: JST['boards/new'],
    
    tagName: "section",
    
    className: "boardsNew centered",
    
    events: {
      "submit form": "submit"
    },
    
    render: function () {
      var that = this;
      that.$el.html(that.template({
        boards: that.collection
      }));
      return this;
    },
    
    submit: function (event) {
      event.preventDefault();
      var params= $(event.currentTarget).serializeJSON();
      var newBoard = new TrelloClone.Models.Board(params['board'])
      newBoard.save({}, {
        success: function () {
          TrelloClone.Collections.boards.add(newBoard);
          Backbone.history.navigate("/", { trigger: true });
        }
      });
    }
      
});