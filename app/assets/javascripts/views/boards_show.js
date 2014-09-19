TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  
  tagName: 'li',
  
  className: 'board-show',
  
  template: JST['boards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
  },
  
  events: {
    "click button.delete": "removeBoard"
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      board: that.model
    }));
    that.$el.append(new TrelloClone.Views.ListsNew().render().$el)
    this.attachSubviews();
    $('.lists').sortable();
    return this;
  },
  
  removeBoard: function (event) {
    event.preventDefault();
    var confirmation = confirm("are you sure?");
    if (confirmation === true) {
      this.model.destroy();
      Backbone.history.navigate("#", { trigger: true });
    }
  },
  
  addList: function (list) {
     var listShow =
       new TrelloClone.Views.ListsShow({ model: list });
     this.addSubview(".lists", listShow);
   },
  
})

// use list Subviews, don't iterate over lists

// user card subview in list, don't iterate