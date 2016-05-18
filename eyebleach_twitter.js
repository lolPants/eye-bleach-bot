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
      //console.log(image);
      // Now we have the image.
      // Lets upload that shit to twitter
  
      payload = "Credit to /u/" + global.credits + " on Reddit"
      T.post('media/upload', { media_data: image }, function (err, data, response) {
        // now we can assign alt text to the media, for use by screen readers and
        // other text-based presentations and interpreters
        var mediaIdStr = data.media_id_string;
        var altText = "Eyebleach Image. Credit to /u/" + global.credits;
        var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };

        T.post('media/metadata/create', meta_params, function (err, data, response) {
          if (!err) {
            // now we can reference the media and post a tweet (media will attach to the tweet)
            var params = { status: payload, media_ids: [mediaIdStr] }

            T.post('statuses/update', params, function (err, data, response) {
              //console.log(data)
            })
          }
        })
      });
  });
}

// Allow other people to hook into this lovely file
module.exports = {
  postTweet: postTweet
}