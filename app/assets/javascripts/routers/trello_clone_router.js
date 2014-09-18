TrelloClone.Routers.FeedRouter = Backbone.Router.extend({
  
  routes: {
    '': 'boardsIndex',
    'boards/new': 'boardsNew',
    'boards/:id': 'boardsShow'
  },
  
  boardsIndex: function () {
    var boards = TrelloClone.Collections.boards;
    var view = new TrelloClone.Views.BoardsIndex({
      collection: boards
    })
    boards.fetch();
    this._swapView(view);
  },
  
  boardsNew: function () {
    var view = new TrelloClone.Views.BoardsNew();
    this._swapView(view);
  },
  
  boardsShow: function (id) {
    var view = new TrelloClone.Views.BoardsShow({
      model: TrelloClone.Collections.boards.getOrFetch(id)
    })
    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
   $("#main").html(view.render().$el);
  }
  
});