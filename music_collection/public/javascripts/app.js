var App = {
  albumsLoaded: function() {
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },
  tracksLoaded: function(tracks) {
    var tracksModal = new TracksView({
      collection: tracks,
      album: this.selectedAlbum.toJSON()
    });

    tracksModal.render();
    this.tracks = tracksModal;
  },
  fetchTracks: function(name) {
    var tracks = new (Tracks.extend({
      url: "/albums/" + name + ".json"
    }))();

    this.selectedAlbum = this.albums.findWhere({ title: name });

    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};

var Router = Backbone.Router.extend({
  getAlbum: function(name) {
    App.fetchTracks(name);
  },
  routes: {
    'album/:name': 'getAlbum'
  },
  index: function() {
    if (App.tracks.$el.is(":animated")) {
      App.tracks.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }
});

Backbone.history.start({
  pushState: true,
  silent: true
});

var router = new Router();

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  var href = e.currentTarget.href.split('/');
  App.fetchTracks(decodeURI(href[href.length - 1]));
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ""), { trigger: true });
});
