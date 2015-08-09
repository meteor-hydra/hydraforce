Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function routerMap() {

  this.route('dashboard', {
    path: '/',
    template: 'hello'
  });

  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });
});
