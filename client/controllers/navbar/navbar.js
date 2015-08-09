Template.navbar.helpers({
  yourContacts: function() {
    return Contacts.find().map(function(object){ return {id: object._id, value: object.name}});
  }
});

Template.navbar.rendered = function() {
  Meteor.typeahead.inject();
};
