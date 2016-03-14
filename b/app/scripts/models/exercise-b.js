var Backbone = require('backbone');

var FormModel = Backbone.Model.extend({
  id: '_id',
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/exerciseANNA',
});

module.exports = {
  FormModel: FormModel,
};
