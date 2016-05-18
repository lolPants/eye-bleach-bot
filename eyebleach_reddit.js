var request = require('sync-request');

module.exports = {
  getData: function (subreddit, count) {
    url = "https://www.reddit.com/r/" + subreddit + "/top.json?limit=" + count;
    var res = request("GET", url);
    var user = JSON.parse(res.getBody('utf8'));
    
    return user['data']['children'];
  }
}