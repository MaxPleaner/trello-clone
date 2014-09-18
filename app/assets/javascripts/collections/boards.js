TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
  url: 'api/boards',
  getOrFetch: function (id) {
    var boardMatch = this.get(id);
    if (!boardMatch) {
      boardMatch = new TrelloClone.Models.Voard({
        id: id
      });
      var that = this;
      boardMatch.fetch({
        success: function () {
          that.add(boardMatch);
        }
      });
    }
    return boardMatch;
  }
});