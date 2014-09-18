TrelloClone.Routers.FeedRouter = Backbone.Router.extend({
  
  initialize: function() {
    
  },
  
  routes: {
    '': 'index',
    'boards': 'boardsIndex'
  },
  
  index: function () {
    alert("hello from backbone");
  },
  
  boardsIndex: function () {
    var boards = TrelloClone.Collections.boards;
    var view = new TrelloClone.Views.BoardsIndex({
      collection: boards
    })
    boards.fetch();
    this._swapView(view);
  },
  
  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
   $("body").html(view.render().$el);
  }
  
});