TrelloClone.Routers.FeedRouter = Backbone.Router.extend({
  
  routes: {
    '': 'boardsIndex',
    // 'boards/new': 'boardsNew'
    'boards/:id': 'boardsShow',
    // 'boards/:id/lists/new': 'listsNew'
  },
  
  boardsIndex: function () {
    var boards = TrelloClone.Collections.boards;
    var view = new TrelloClone.Views.BoardsIndex({
      collection: boards
    })
    boards.fetch();
    this._swapView(view);
    $('#main').append(new TrelloClone.Views.BoardsNew().render().$el)
  },
  
  boardsShow: function (id) {
    var model = TrelloClone.Collections.boards.getOrFetch(id);
    model.fetch();
    var view = new TrelloClone.Views.BoardsShow({
      model: model
    })
    this._swapView(view);
    $('#main').prepend(new TrelloClone.Views.ListsNew().render().$el)
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
   $("#main").html(view.render().$el);
  },
  
});