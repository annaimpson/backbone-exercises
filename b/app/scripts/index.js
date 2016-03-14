var $ = require('jquery');

var models = require('./models/exercise-b.js');
var views = require('./views/exercise-b.js');


$(document).ready(function(){
  var formModel = new models.FormModel();
  var personFormView = new views.PersonFormView({model: formModel, el: '#app'}); //insert id in quotes
  personFormView.render();

});
