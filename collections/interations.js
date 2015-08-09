Interactions = new Mongo.Collection("interactions");
Interactions.attachSchema(new SimpleSchema({
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
  contactID: {
    type: String,
    autoform: {
      omit: true
    },
    label: "contactID"
  },
  salesmanID: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function () {
      if (this.isInsert) {
        return this.userId;
      } else if (this.isUpsert) {
        return {$setOnInsert: this.userId};
      } else {
        this.unset();
      }
    },
    label: "salesmanID"
  },
  type: {
    type: String,
    label: "Interaction Type",
    allowedValues: ["email", "phone", "text"]
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  note: {
    type: String,
    label: "Note",
    autoform: {
      rows: 5
    }
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
