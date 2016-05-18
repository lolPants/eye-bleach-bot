// REQUIRE ALL THE THINGS
var twit = require('twit');
var conf = require('./config');
var base64 = require('node-base64-image');

// We need to integrate to Twitter
var T = new twit(conf.twit_conf);

// Function to do our work for us
function postTweet(url, credit) {
  // Get the image
  global.credits = credit;
  base64.base64encoder(url, {string: true}, function (err, image) {
      if (err) {
          console.log(err);
      }
      console.log(image);
      // Now we have the image.
      // Lets upload that shit to twitter
  
      payload = url + "\nCredit to /u/" + global.credits + " on Reddit"
      T.post('statuses/update', { status: payload }, function(err, data, response) {
        //console.log(data)
      });
  });
}

// Allow other people to hook into this lovely file
module.exports = {
  postTweet: postTweet
}