// Import more shite
var request = require('sync-request');
var fs = require('fs');
var conf = require('./config');

// Function to, get this, GET some DATA :O
function getData(subreddit, count) {
  // What URL are we gonna use? Compile one from some arguments
  url = "https://www.reddit.com/r/" + subreddit + "/top.json?limit=" + count;
  // Make a magical GET request
  var res = request("GET", url);
  // Parse into a format we can actually work with
  var data = JSON.parse(res.getBody('utf8'));
  // Send back the data
  return data['data']['children'];
}

// See if the URL pulled is an image.
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function getUrl() {
  i = 0;
  posts = [];
  getData(conf.subreddit, 100).forEach(function(element) {
    if (checkURL(element['data']['url'])) {
      posts.push([element['data']['author'], element['data']['url']]);
    }
    i++;
  }, this);
  return posts[Math.floor(Math.random()*posts.length)];
}

// Shove these functions to the rest of the bot. SHOVE HARDER!
module.exports = {
  getData: getData,
  getUrl: getUrl
}