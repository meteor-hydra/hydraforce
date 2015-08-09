Session.setDefault('signupflow', true);

UI.registerHelper('session', function (key) {
  return Session.get(key);
});

Template.landing.events({
  'click .signin-btn': function (e) {
    e.preventDefault();
    Session.set('signupflow', false);
  },
  'click .signup-btn': function (e) {
    e.preventDefault();
    Session.set('signupflow', true);
  }
})

Template.signup.events({
  'submit form': function (e) {
    e.preventDefault();
    Accounts.createUser({
      username: $('input[type="email"]').val(),
      email: $('input[type="email"]').val(),
      password: $('input[type="password"]').val()
    });
  }
});

Template.signin.events({
  'submit form': function (e) {
    e.preventDefault();
    Meteor.loginWithPassword($('input[type="email"]').val(), $('input[type="password"]').val());
  }
});
