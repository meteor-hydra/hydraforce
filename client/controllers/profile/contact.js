AutoForm.addHooks('addInteraction', {
  before: {
    insert: function (doc) {
      doc.contactID = Router.current().params["_id"];
      return doc;
    }
  }
});
