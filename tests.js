var func_r = require('./eyebleach_reddit');
var func_t = require('./eyebleach_twitter');

if (func_r.getUrl() != null) {
  console.log('URL Pulling [OK]');
} else {
  throw Error('Replace Function Failed');
}