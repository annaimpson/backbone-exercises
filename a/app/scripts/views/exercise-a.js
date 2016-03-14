var $ = require('jquery');
var Backbone = require('backbone');

// Utility
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var formTemplate = require('../../templates/blogpost.hbs');

var BlogFormView = Backbone.View.extend({
  template: formTemplate,

  events: {
    "submit": "addPost"
  },

  render: function(){
    this.$el.html(this.template());
    console.log(this);
    return this;
  },

  addPost: function(e){
    e.preventDefault();
    console.log('yes');
    var formData = this.$el.serializeObject();
    console.log(formData);
    this.model.set(formData);
    this.model.save();
  }
});

module.exports = {
  'BlogFormView': BlogFormView
};
