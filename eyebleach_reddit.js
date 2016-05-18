var request = require('sync-request');

function getData(subreddit, count) {
  url = "https://www.reddit.com/r/" + subreddit + "/top.json?limit=" + count;
  var res = request("GET", url);
  var user = JSON.parse(res.getBody('utf8'));
  console.log(user['data']['children']);
}

getData("aww", 2)