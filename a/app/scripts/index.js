var $ = require('jquery');
var models = require('./models/exercise-a.js');
var views = require('./views/exercise-a.js');

$(document).ready(function(){
  var exerciseModel = new models.ExerciseModel();
  var blogFormView = new views.BlogFormView({model: exerciseModel, el: '#app'});
  blogFormView.render();
});
