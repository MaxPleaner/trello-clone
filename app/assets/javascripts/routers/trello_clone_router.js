TrelloClone.Routers.FeedRouter = Backbone.Router.extend({
  
  routes: {
    '': 'boardsIndex',
    'boards/:id': 'boardsShow',
  },
  
  boardsIndex: function () {
    var boards = TrelloClone.Collections.boards;
    var view = new TrelloClone.Views.BoardsIndex({
      collection: boards
    })
    boards.fetch();
    this._swapView(view);
  },
  
  boardsShow: function (id) {
    var model = TrelloClone.Collections.boards.getOrFetch(id);
    model.fetch();
    var view = new TrelloClone.Views.BoardsShow({
      model: model
    })
    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
   $("#main").html(view.render().$el);
  },
  
});