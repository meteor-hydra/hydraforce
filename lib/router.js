Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function routerMap() {

  this.route('index', {
    path: '/',
    template: 'hello'
  });
});
