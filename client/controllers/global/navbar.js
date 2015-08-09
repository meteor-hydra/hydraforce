Template.navbar.helpers({
  typeaheadData: function() {
    return [
      {
        name: 'customers',
        valueKey: 'name',
        displayKey: 'undefined',
        local: function () { return Contacts.find().fetch(); },
        template: 'customerTypeaheadResult'
      },
      {
        name: 'interactions',
        valueKey: 'note',
        displayKey: 'undefined',
        local: function () { return Interactions.find().fetch(); },
        template: 'interactionTypeaheadResult'
      }
    ];
  },
  onTypeaheadSelect: function(event, suggestion, datasetName) {
    Router.go('contact', {_id: suggestion.contactID || suggestion._id});
  }
});

Template.navbar.onRendered(function () {
  $('.twitter-typeahead').css('width', '100%');
});
