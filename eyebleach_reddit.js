// Import more shite
var request = require('sync-request');

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

// Shove these functions to the rest of the bot. SHOVE HARDER!
module.exports = {
  getData: getData
}