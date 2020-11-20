var Rooms = {

  fetch: function() {
    Parse.readAll((data) => {
      // call MessageView.render on the data
      console.log('chatterbox: Rooms retrieved'),
      RoomsView.render(data);
    });
  }

};
