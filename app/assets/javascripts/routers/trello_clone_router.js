TrelloClone.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function() {
    
  },
  
  routes: {
    '': 'index',
  },
  
  index: function () {
    alert("hello from backbone");
  },
  
})