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
  }
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
