// var http = require('http');
// var port = Number(process.env.PORT || 3000);
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Node.js\n');
//   }).listen(port);
// console.log('Server running');


// const io = require('socket.io')(server);

// io.on('connection', function(socket) {
//     console.log(socket.id)
//     socket.on('SEND_NOTIFI', function(data) {
//         io.emit('NOTIFI', data)
//     });
//     socket.on('CREATE_JOB', function(data) {
//       io.emit('NOTIFI_CREATE_JOB', data)
//     });
// });


const express   = require('express'),
      http      = require('https'),
      fs 		= require('fs'),
      app       = express()
var service = http.createServer(app);
const server = service.listen(6001, function() {
    console.log('server running on port 6001');
});


// const io = require('socket.io')(server);

// io.on('connection', function(socket) {
//     console.log(socket.id)
//     socket.on('SEND_NOTIFI', function(data) {
//         io.emit('NOTIFI', data)
//     });
//     socket.on('CREATE_JOB', function(data) {
//       io.emit('NOTIFI_CREATE_JOB', data)
//     });
// });