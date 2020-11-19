var Messages = {
  //create a fetch method
  fetch: function() {
    Parse.readAll((data) => {
      // call MessageView.render on the data
      MessagesView.render(data);
    });
  }


};


//$.get(Parse.server, function(data))