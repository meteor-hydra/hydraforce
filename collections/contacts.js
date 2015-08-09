Contacts = new Mongo.Collection("contacts");
Contacts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  email: {
    type: String,
    label: "Email"
  },
  phone: {
    type:String,
    label: "Phone Number"
  },
  organization: {
    type:String,
    label: "Organization"
  },
  notes : {
    type: String,
    label: "Notes"
  },
  createdAt: {
    type: Date,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
}));
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("contacts", function () {
    return Contacts.find({});
  });
}

if (Meteor.isClient) {
   Meteor.subscribe("contacts");
}
