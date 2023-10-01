var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("This is NodeJS Server running on port: 3000");
});
server.listen(3000);