TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  
  tagName: 'section',
  
  className: 'boardShow',
  
  template: JST['boards/show'],
  
  // collection: this.model.lists(),
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), "add sync", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    this.model.lists().each(function(list){
      this.addList(list);
    }.bind(this));
    // this.lists.fetch();
    var newListView = new TrelloClone.Views.ListsNew({
      model: this.model
    });
    this.addSubview('.new-list', newListView);
  },
  
  events: {
    "click button.delete": "removeBoard"
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      board: that.model
    }));


    console.log('rending board-show attaching LISTS')
    this.attachSubviews();
    this.$('.lists').sortable({
      items: "li:not(.unsortable)"
    });
    this.$(".cards").sortable({
      connectWith: ".cards",
      items: "li:not(.unsortable)"
    });
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
   
   removeList: function (list) {
     var subview = _.find(
       this.subviews(".lists"),
       function (subview) {
         return subview.model === list;
       }
     );

     this.removeSubview(".lists", subview);
   },
  
})

// use list Subviews, don't iterate over lists

// user card subview in list, don't iterate