var postHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        console.log("HOOKED");
        doc.userId = Meteor.userId();
        return doc;
      }
    }
  }
}
