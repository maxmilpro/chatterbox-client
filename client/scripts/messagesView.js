var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //access the messages' data by invoking Messages.fetch()
    var messageData = Messages.fetch();
    console.log('messageData: ' + messageData);
    //invoke the render(data)
    MessagesView.render(messageData);
  },

  render: function(data) {
    //parameter(data)
    //iterate over the data
    var html = "";
    for (var i = 0; i < data.results.length; i++) {
      //create a complier function with the MessageView.render
      var complier = MessageView.render();
      //create a variable equal to the return value of invoke MessageView render method
      html += complier(data.results[i]);
      //append rendered message to the chats element
    }
    MessagesView.$chats.append(html);
  }

};