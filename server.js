
const express   = require('express'),
      // http      = require('https'),
      http      = require('http'),
      fs 		= require('fs'),
      app       = express()
// var options = { 
// 	key: fs.readFileSync('/etc/letsencrypt/live/devwork.vn/privkey.pem'),
// 	cert: fs.readFileSync('/etc/letsencrypt/live/devwork.vn/cert.pem'),
// 	ca: fs.readFileSync('/etc/letsencrypt/live/devwork.vn/chain.pem')
// };
// var service = http.createServer(options,app);
var service = http.createServer(app);
const server = service.listen(6001, function() {
    console.log('server running on port 6001');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_NOTIFI', function(data) {
        io.emit('NOTIFI', data)
    });
    socket.on('CREATE_JOB', function(data) {
      io.emit('NOTIFI_CREATE_JOB', data)
    });
});