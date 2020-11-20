var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //access the messages in the database
    Rooms.fetch();
  },

  render: function(data) {
    // create a containerArr = rooms
    var roomList = [];
    // iterate over the data
    for (room of data.results) {
      // if the current room is not already in the rooms array
      if (room.roomname && !_.contains(roomList, room.roomname)) {
        // add the room to the rooms array
        roomList.push(room.roomname);
      }
    }
    // iterate over the rooms array
    for (room of roomList) {
      var compiled = _.template('<option> <%- roomName %>  </option>');
      // add each to the room select
      RoomsView.$select.append(compiled({'roomName': room}));
    }
  }

};
