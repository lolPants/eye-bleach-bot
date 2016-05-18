var twit = require('twit');
var conf = require('./config');
var base64 = require('node-base64-image');

var T = new twit(conf.twit_conf);

function postTweet(url, credit) {
  payload = url + "\nCredit to /u/" + credit + " on Reddit"
  T.post('statuses/update', { status: payload }, function(err, data, response) {
    //console.log(data)
  });
}

function getImage(url) {
  base64.base64encoder(url, {string: true}, function (err, image) {
      if (err) {
          console.log(err);
      }
      console.log(image);
  });
}

module.exports = {
  postTweet: postTweet,
  getImage: getImage
}