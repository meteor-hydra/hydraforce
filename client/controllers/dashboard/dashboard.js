
UI.registerHelper("eq", function(one, two){
    return one == two;
});

Template.dashboard.events({
  'click #Email' : function(){
    Session.set('filter', { type: 'email' });
  },
  'click #Phone' : function(){
    Session.set('filter', { type: 'phone' });
  },
  'click #Text' : function(){
    Session.set('filter', { type: 'text' });
  },
  'click #All' : function(){
    Session.set('filter', {});
  },

});
