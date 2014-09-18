window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.FeedRouter();
    Backbone.history.start();
  }
};

$(TrelloClone.initialize);
