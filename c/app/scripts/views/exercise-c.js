var Backbone = require('backbone');
var $ = require('jquery');

var blogTemplates = require('../../templates/blog.hbs');

var BlogListView = Backbone.View.extend({
  className: "sidebar",
  template: blogTemplates,

  render: function(model){
    this.$el.append(this.template(model.toJSON()));
    console.log(model);
    return this;
  },
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  }

});



$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var BlogPostView = Backbone.View.extend({
  className: "blog",
  template: blogTemplates,

  events: {
    "click": "addPost"
  },

  blogEntry: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.add(formData);

    this.render();
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

module.exports = {
  'BlogListView': BlogListView,
  'BlogPostView': BlogPostView
};
