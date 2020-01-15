var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.tracks_url = '/ablum/' + attrs.title;
    return attrs;
  }
});
