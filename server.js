var http = require('http');
var port = Number(process.env.PORT || 3000);
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
  }).listen(port);
console.log('Server running');

