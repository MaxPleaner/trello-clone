TrelloClone.Collections.Lists = Backbone.Collection.extend({
  
  model: TrelloClone.Models.List,
  
  url: 'api/lists',
  
  getOrFetch: function (id) {
    var listMatch = this.get(id);
    if (!listMatch) {
      listMatch = new TrelloClone.Models.List({
        id: id
      });
      var that = this;
      listMatch.fetch({
        success: function () {
          that.add(listMatch);
        }
      });
    }
    return listMatch;
  }
  
});

TrelloClone.Collections.lists = new TrelloClone.Collections.Boards();