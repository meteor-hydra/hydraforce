Template.navbar.helpers({
  yourContacts: function() {
    console.log("ITS WORKING!");
    console.log(Contacts.find().fetch());
    return Contacts.find().map(function(object){ return {id: object._id, value: object.name}});
  }
});

Template.navbar.rendered = function() {
  Meteor.typeahead.inject();
};
