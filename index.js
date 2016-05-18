var func_r = require('./eyebleach_reddit');
var func_t = require('./eyebleach_twitter');
var func_help = require('./eyebleach_help');
var conf = require('./config');

function postEyeBleach() {
  func_t.postTweet(func_r.getUrl(conf.subreddit)[1], func_r.getUrl(conf.subreddit)[0]);
  func_help.log("Eyebleach Posted");
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