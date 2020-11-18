var Messages = {
  //create a fetch method
  fetch: function() {
    Parse.readAll((callback) => {
      console.log('success');
      return data;
    });
  }


};


//$.get(Parse.server, function(data))