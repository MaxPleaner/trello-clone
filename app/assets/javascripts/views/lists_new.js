TrelloClone.Views.ListsNew = Backbone.View.extend({
    template: JST['lists/new'],
    
    tagName: 'ul',
    
    events: {
      "submit form": "submit"
    },
    
    render: function () {
      var that = this;
      that.$el.html(that.template({
        lists: that.collection
      }));
      return this;
    },
    
    submit: function (event) {
      event.preventDefault();
      var params = $(event.currentTarget).serializeJSON();
      var newList = new TrelloClone.Models.List(params['list'])
      newList.set({board_id: this.model.id })
      newList.save({}, {
        success: function () {
          TrelloClone.Collections.lists.add(newList);
          Backbone.history.navigate("/", { trigger: true });
        }
      });
    }
      
});