$('#items_json').remove();

const ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.set('id', this.cid);
  }
});

const ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  comparator: 'name',
});

let item1 = new ItemModel(items_json[0]);
let item2 = new ItemModel(items_json[1]);
const items = new ItemsCollection([item1, item2]);

let $table = $('table tbody');

const app = {
  templates: {},
  createTemplates: function() {
    var self = this;
    $('[type="text/x-handlebars"]').each(function(idx) {
      if (idx == 0) {
        self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
        $(this).remove();
      } else {
        self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
        Handlebars.registerPartial('item', $(this).html());
      }
    });
  },
  renderItems: function() {
    $table.children().remove();
    $table.append(this.templates.items({items: items}));
  },
  renderItem: function(item) {
    $table.append(this.templates.item(item.toJSON()));
  },
  createItem: function(e) {
    e.preventDefault();
    let args = {};
    let vals = $('form').serializeArray();
    vals.forEach(function(pair) {
      args[pair['name']] = pair['value']
    });

    let item = new ItemModel(args);
    items.add(item);
    this.renderItems()
    document.querySelector('form').reset();
  },
  deleteItem: function(e) {
    e.preventDefault();
    let id = $(e.target).attr('data-id');
    items.remove(id);
    this.renderItems();
  },
  removeAll: function(e) {
    e.preventDefault();
    items.reset();
    this.renderItems();
  },
  bindEvents: function() {
    $('form').on('submit', this.createItem.bind(this));
    $('table tbody').on('click', 'a', this.deleteItem.bind(this));
    $('table + p').on('click', this.removeAll.bind(this));
  },
  init: function() {
    this.createTemplates();
    this.renderItems();
    this.bindEvents();
  }
};

app.init();
