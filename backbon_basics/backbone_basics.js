var PostModel = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/posts'
});

var post_1 = new PostModel({ id: 1 });

post_1.fetch({
  success: postReceived
});

function postReceived(model) {
  user = new UserModel({ id: post_1.get('userId') });
  user.fetch({
    success: setUserToPost
  });
}

function setUserToPost() {
  post_1.set('user', user);
  console.log(post_1.toJSON());
}

var UserModel = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users'
});

var user;
