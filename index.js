var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)

var blindsController = require('./blinds');

http.listen(8080); //listen to port 8080

const blinds = new blindsController();

function handler(req, res) { //create server
  fs.readFile(__dirname + '/public/index.html', function (err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' }); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' }); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', function (socket) {
  blinds.positionReported = function(position) {
    socket.emit('positionReported', position);
  }

  socket.on('startOpen', function (data) {
    blinds.startOpen();
  });

  socket.on('stopOpen', function (data) {
    blinds.stopOpen();
  });

  socket.on('startClose', function (data) {
    blinds.startClose();
  });

  socket.on('stopClose', function (data) {
    blinds.stopClose();
  });

  socket.on('openFully', function (data) {
    blinds.openFully();
  });

  socket.on('closeFully', function (data) {
    blinds.closeFully();
  });

  socket.on('stop', function(data) {
    blinds.stop();
  });

  socket.on('setMin', function(data) {
    blinds.setMin();
  });

  socket.on('setMax', function(data) {
    blinds.setMax();
  })

  socket.on('clientReady', function() {
    var state = blinds.currentState();
    socket.emit('blindStateReady', state);
  });
});

console.log("Blind Controller running");
