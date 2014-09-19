TrelloClone.Views.ListsNew = Backbone.View.extend({
    template: JST['lists/new'],
    
    // initialize: function () {
//       this.listenTo("")
//     }

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
      newList.save({}, {
        success: function () {
          TrelloClone.Collections.lists.add(newList);
        }
      });
    }
      
});