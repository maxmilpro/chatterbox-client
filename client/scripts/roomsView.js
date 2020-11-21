var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $addRoom: $('#add-room'),

  initialize: function() {
    //access the messages in the database
    Rooms.fetch();
    RoomsView.$select.on('change', RoomsView.handleRoomSelect);
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
  },

  render: function() {
    RoomsView.$select.empty();
    // iterate over the rooms array
    for (room of Rooms.list) {
      var compiled = _.template(`<option value='<%- roomName %>'> <%-roomName%>  </option>`);
      RoomsView.$select.append(compiled({'roomName': room}));
    }
  },

  handleRoomSelect: function () {
    console.log('new room selected');
    Messages.fetch();
  },

  handleAddRoom: function() {
    Rooms.addRoom();
  }
};





