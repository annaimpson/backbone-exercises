var Backbone = require('backbone');

var ExerciseModel = Backbone.Model.extend({
  id: '_id',
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/exerciseANNA3',

  default: {
    title: "",
    body: ""
  }
});

module.exports = {
  ExerciseModel: ExerciseModel
};
