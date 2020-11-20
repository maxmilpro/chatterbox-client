var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('.refresh'),

  initialize: function() {
    Messages.fetch();
    MessagesView.$refresh.on('click', MessagesView.handleRefresh);
  },

  render: function(data) {
    var html = "";
    //iterate over the data
    for (var i = 0; i < data.results.length; i++) {
      // if there is a username
      if (data.results[i]['username'] === undefined || data.results[i]['text'] === undefined) {
        continue;
      }
      // capture the currently selected roomname
      //if the messages roomname is === to the currently selected roomname
      if (data.results[i].roomname === RoomsView.$select.val()) {
        //create a complier function with the MessageView.render
        var compiled = MessageView.render(data.results[i]);
        //create a variable equal to the return value of invoke MessageView render method
        html += compiled;
      }
      //append rendered message to the chats element
    }
    MessagesView.$chats.empty();
    MessagesView.$chats.append(html);
  },

  handleRefresh: function() {
    Messages.fetch();
  }

};