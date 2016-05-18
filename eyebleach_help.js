var fs = require("fs");
var logPath = __dirname + '/eyebleach.log';

function log(msg) {
  var d = new Date();
  var data = '[' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ' + msg;
  console.log(data);
  fs.access(logPath, fs.R_OK | fs.W_OK, function(err) {
    if (err) {
      // cant save to file
          throw("Cannot Save to Log File");
    } else {
      fs.appendFile(logPath, data + '\n', 'utf8', function(err) {
        if (err) {
          throw("Cannot Append to Log File");
        }
      });
    }
  });
}

// HAVE MY FUNCTIONS
module.exports = {
  log: log
}