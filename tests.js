var func_r = require('./eyebleach_reddit');

if (func_r.getUrl("aww", 100) != null) {
  console.log('URL Pulling [OK]');
} else {
  throw Error('Replace Function Failed');
}