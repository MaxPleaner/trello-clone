TrelloClone.Views.ListsNew = Backbone.View.extend({
    template: JST['lists/new'],

    events: {
      "submit form": "submitList"
    },
    
    render: function () {
      var that = this;
      that.$el.html(that.template({
        lists: that.collection
      }));
      return this;
    },
    
    submitList: function (event) {
      event.preventDefault();
      var params = $(event.currentTarget).serializeJSON();
      var newList = new TrelloClone.Models.List(params['list'])
      newList.set({board_id: this.model.id })
      var that = this;
      newList.save({}, {
        success: function () {
          TrelloClone.Collections.lists.add(newList);
          that.model.fetch();
           Backbone.history.navigate("boards/" + that.model.id, { trigger: true });
        }
      });
            
    },
          
});