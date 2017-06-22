var fs = require('fs')

fs.readFile(process.argv[2], function callback(err,data) {
  if (err) {
    return console.log(err)
  }
  var lines = data.toString().split('\n').length - 1
  console.log(lines)
})
