Interactions = new Mongo.Collection("interactions");
Interactions.attachSchema(new SimpleSchema({
  contactID: {
    type: Number,
    label: "customerID"
  },
  salesmanID: {
    type: Number,
    label: "salesmanID"
  },
  type: {
    type: String,
    label: "Type"
  },
  note: {
    type:String,
    label: "Note"
  }
}));

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("interactions", function () {
    return Interactions.find({});
  });
}

if (Meteor.isClient) {
   Meteor.subscribe("interactions");
}
