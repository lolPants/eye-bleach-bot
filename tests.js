var func_r = require('./eyebleach_reddit');
var func_t = require('./eyebleach_twitter');

if (func_r.getUrl("aww", 100) != null) {
  console.log('URL Pulling [OK]');
} else {
  throw Error('Replace Function Failed');
}