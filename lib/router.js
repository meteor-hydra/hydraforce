Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('landing');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

Router.map(function routerMap() {

  this.route('dashboard', {
    path: '/',
    template: 'hello'
  });


  this.route('newContact', {
    path: '/newContact',
    template: 'createContact'
  });

  this.route('contact', {
        path: '/contact/:_id',
        waitOn: function() {
                return Meteor.subscribe('contacts');
        },
        data: function() {
                var findById = Contacts.findOne(this.params._id);
                console.log(findById);
                if (typeof findById !== "undefined") {
                  return {
                    name: findById.name,
                    email: findById.email,
                    phone: findById.phone,
                    org: findById.organization,
                    notes: findById.notes

                  };
                }else{
                  return {};
                }

        }
    });
});
