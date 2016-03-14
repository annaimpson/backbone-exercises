var Backbone = require('backbone');

var ReadingModel = Backbone.Model.extend({
  id: '_.id',
});

var ReadingCollection = Backbone.Collection.extend({
  model: ReadingModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/exerciseANNA3'
});

module.exports = {
  'ReadingModel': ReadingModel,
  'ReadingCollection': ReadingCollection
};
