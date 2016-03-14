var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/exercise-c.js');
var views = require('./views/exercise-c.js');  //abstraction of information



$(document).ready(function(){
  var readingModel = new models.ReadingModel();
  var readingCollection = new models.ReadingCollection();
  var blogListView = new views.BlogListView({collection: readingCollection}); //el: '#app'}); //creates the real thing from the abstraction
  console.log(blogListView);

$('#app').append(blogListView.el);
readingCollection.fetch();
});
