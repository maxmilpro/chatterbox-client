var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('.refresh'),
  $username: $('.username'),

  initialize: function() {
    Messages.fetch();
    MessagesView.$refresh.on('click', MessagesView.handleRefresh);
    MessagesView.$chats.on('click', '.username', MessagesView.handleAddFriend);
  },

  render: function(data) {
    var html = "";
    //iterate over the data
    for (var i = 0; i < data.results.length; i++) {
      // if there is a username
      if (data.results[i]['username'] === undefined || data.results[i]['text'] === undefined) {
        continue;
      }
      //if the messages roomname is === to the currently selected roomname
      if (data.results[i].roomname === RoomsView.$select.val()) {
        //if the current message's username is in the friends list
        if (_.contains(Friends.list, data.results[i].username)) {
          // compile the message with bold text
          var compiled = MessageView.renderFriend(data.results[i]);
          //otherwise
        } else {
          // compile the message with regularly text
          var compiled = MessageView.render(data.results[i]);
        }
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
  },

  handleAddFriend: function() {
    console.log('clicked a username');
    Friends.addFriend(this.innerText);
  }

};