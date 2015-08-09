Template.timelineItem.helpers({
  getTimeAgo: function(date) {
    return moment(date).fromNow();
  },
  getHeader: function(id, type){
    var customerOBJ = Contacts.findOne(id);
    var customer = 'the customer';
    console.log(customerOBJ);
    if(customerOBJ){
      customer = customerOBJ.name;
    }
    var string = '';
    if(type == 'email'){
      string = ' sent an email to ';
    }else if(type == 'phone'){
      string = ' called ';
    }else{
      string = ' sent a message to ';
    }
    return string + customer;
  },
  pickIcon :function(type){
    if(type == 'email'){
      return 'envelope';
    }else if(type == 'phone'){
      return 'phone';
    }else{
      return 'comments';
    }
  },
  getMember: function(id){
    if(id == Meteor.userId()){
      return "You";
    }else{
      return "A Team Member";
    }
  }
});

Template.recentInteractions.helpers({
  getDate: function(){
    return moment().format('MMMM Do YYYY');
  }
})
