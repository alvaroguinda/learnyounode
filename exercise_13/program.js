var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end('Send me a GET')
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  req_url = url.parse(req.url, true)
  if (req_url.pathname === '/api/parsetime') {
    var date = new Date(req_url.query.iso)
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }))
  }
  else if (req_url.pathname === '/api/unixtime') {
    var date = new Date(req_url.query.iso)
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }))
  }
  else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))
