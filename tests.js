var func_r = require('./eyebleach_reddit');
var func_help = require('./eyebleach_help');

if (func_r.getUrl("aww", 100) != null) {
  console.log('URL Pulling [OK]');
} else {
  throw Error('Replace Function Failed');
}

func_help.log('Testing Logs');