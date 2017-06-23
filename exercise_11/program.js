var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, resp) {
  // request handling logic
  src = fs.createReadStream()
  fs.readFile(process.argv[3], function (err, lines) {
    lines.forEach(function (line) {
      src.pipe(line)
    })
  })
})
server.listen(Number(process.argv[2]))
