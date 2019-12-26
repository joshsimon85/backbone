$('#items_json').remove();

const ItemModel = Backbone.Model.extend();
const ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
});

let item1 = new ItemModel(items_json[0]);
let item2 = new ItemModel(items_json[1]);
const items = new ItemsCollection([item1, item2]);

let $table = $('table tbody');

const app = {
  templates: {},
  createTemplates: function() {
    var self = this;
    $('[type="text/x-handlebars"]').each(function(tmp) {
      self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
      $(this).remove();
    });
  },
  renderItems: function() {
    debugger;
    $table.append(this.templates.items(items.toJSON()));
  },
  init: function() {
    this.createTemplates();
    this.renderItems();
  }
};

app.init();
