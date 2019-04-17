var http = require('http');
var port = Number(process.env.PORT || 3000);
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello Node.js\n');
}).listen(port);
console.log('Server running');


//const io = require('socket.io')(server);

//io.on('connection', function(socket) {
//    console.log(socket.id)
//    socket.on('SEND_NOTIFI', function(data) {
//        io.emit('NOTIFI', data)
//    });
//    socket.on('CREATE_JOB', function(data) {
//      io.emit('NOTIFI_CREATE_JOB', data)
//    });
//});