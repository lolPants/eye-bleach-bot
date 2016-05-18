var func_r = require('./eyebleach_reddit');
var func_t = require('./eyebleach_twitter');

function postEyeBleach() {
  func_t.postTweet(func_r.getUrl()[1], func_r.getUrl()[0]);
  console.log("Eyebleach Posted");
}

// Run to start
postEyeBleach()
// Run Every Hour
setInterval(function() {
  try {
    postEyeBleach()
  } catch (e) {
    log(e);
  }
}, 60000 * 60);