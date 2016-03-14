var Backbone = require('backbone');
var $ = require('jquery');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var blogTemplates = require('../../templates/blog.hbs');
console.log(blogTemplates);

var BlogListView = Backbone.View.extend({
  className: "sidebar",
  template: blogTemplates,

  events: {
    "submit": "addPost"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },
  initialize: function(){
    console.log('this is working');
    this.listenTo(this.model, "change", this.renderChild);
  },

  addPost: function(e){
    e.preventDefault();
    var blogData = this.$el.serializeObject();
    this.model.set(blogData);
    this.model.save();
  }
});


var BlogPostView = Backbone.View.extend({
  className: "li",
  template: blogTemplates,

});

module.exports = {
  'BlogListView': BlogListView,
  'BlogPostView': BlogPostView
};
