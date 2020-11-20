var Messages = {
  //create a fetch method
  fetch: function() {
    Parse.readAll((data) => {
      // call MessageView.render on the data
      console.log('chatterbox: Messages retrieved');
      MessagesView.render(data); // {results:}
    });
  },
  // create a set method that adds a message to our database
  set: function(message) {
    // invoke Parse.create with the message object as an argument
    Parse.create(message, (data) => {
      console.log('chatterbox: Message sent');
      Messages.fetch();
    });
  }

};
