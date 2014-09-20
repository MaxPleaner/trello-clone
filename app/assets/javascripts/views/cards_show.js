TrelloClone.Views.CardsShow = Backbone.View.extend({
  
  tagName: 'li',
  
  className: 'cardShow',
  
  template: JST['cards/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync add destroy', this.render);
  },
  
  events: {
    "mouseenter": "showDelete",
    "mouseleave": "hideDelete",
    "click .deleteCard": "deleteCard",
    "sortstart": "dragEffect",
    "sortstop": "endDragEffect"
  },
  
  showDelete: function (event) {
    this.$('.deleteCard').removeClass("invisible");
  },
  
  hideDelete: function (event) {
    this.$(".deleteCard").addClass("invisible");
  },
  
  deleteCard: function (event) {
    event.preventDefault();
    var confirmation = confirm("are you sure?");
    if (confirmation === true) {
      this.model.destroy();
    }
  },
  
  dragEffect: function (event, ui) {
    $(this.currentTarget).addClass("dragged");
  },
  
  endDragEffect: function (event) {
    $(this.currentTarget).removeClass("dragged");
  },
  
  render: function () {
    var that = this;
    that.$el.html(that.template({
      card: that.model
    }));
    return this;
  },

})

    
