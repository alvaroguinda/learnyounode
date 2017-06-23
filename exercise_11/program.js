var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, resp) {
  // request handling logic
  resp.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(resp)
})
server.listen(Number(process.argv[2]))
