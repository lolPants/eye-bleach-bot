var twit = require('twit');
var conf = require('./config');

var T = new twit(conf.twit_conf);

function postTweet(url, credit) {
  payload = url + "\nCredit to /u/" + credit + " on Reddit"
  T.post('statuses/update', { status: payload }, function(err, data, response) {
    //console.log(data)
  });
}

function getImage(url) {
  
}

module.exports = {
  postTweet: postTweet,
  getImage: getImage
}