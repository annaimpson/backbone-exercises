var $ = require('jquery');
var Backbone = require('backbone');

// Utility
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var formTemplate = require('../../templates/person-form.hbs');
console.log(formTemplate);

var PersonFormView = Backbone.View.extend({
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
    console.log('working');
    var personData = this.$el.serializeObject();
    this.model.set(personData);
    this.model.save();
  }

});
module.exports = {
  'PersonFormView': PersonFormView
};
