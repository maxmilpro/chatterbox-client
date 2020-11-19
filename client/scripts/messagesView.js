var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //access the messages' data by invoking Messages.fetch()
    var messageData = Messages.fetch();
    // console.log('messageData: ' + messageData);
    // //invoke the render(data)
    // MessagesView.render(messageData);
  },

  render: function(data) {
    //parameter(data)
    //iterate over the data
    var html = "";
    for (var i = 0; i < data.results.length; i++) {
      // if there is a username
      if (data.results[i]['username'] === undefined) {
        continue;
      }
      //create a complier function with the MessageView.render
      var compiled = MessageView.render(data.results[i]);
      //create a variable equal to the return value of invoke MessageView render method
      html += compiled;
      //append rendered message to the chats element
    }
    MessagesView.$chats.append(html);
  }

};