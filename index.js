var func_r = require('./eyebleach_reddit');
var func_t = require('./eyebleach_twitter');
var conf = require('./config');

//console.log(func_r.getData(conf.subreddit, 100));

func_t.postTweet("http://i.imgur.com/97t2NVH.png", "lolzPants");