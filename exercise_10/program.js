var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var date = new Date()
  year = date.getFullYear()
  month = zeroFill(date.getMonth() + 1)
  day = zeroFill(date.getDate())
  hour = zeroFill(date.getHours())
  minutes = zeroFill(date.getMinutes())
  result = year + "-" + month + "-" + day + " "
  result += hour + ":" + minutes
  return result
}

var server = net.createServer(function (socket) {
  //socket handling logic
  socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))
