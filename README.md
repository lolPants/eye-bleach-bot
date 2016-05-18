# Eyebleach Bot (eye-bleach-bot)
---
## About
A bot which crawls Reddit ([/r/aww](https://www.reddit.com/r/aww/)) for cute pictures, and posts them to Twitter ([@EyeBleachBot](https://twitter.com/eyebleachbot))

## Usage
This bot can be used for your own purposes, simply configure the bot by creating `config.js`.

This file should look like:
```js
module.exports = {
  // Subreddit to scan
  subreddit:    '',
  // Twitter Details
  twit_conf: {
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  ''
  }
};
```

## Credits
Jack Baron - Author

ttezel - [twit](https://github.com/ttezel/twit)

ForbesLindesay - [sync-request](https://github.com/ForbesLindesay/sync-request)

riyadhalnur - [node-base64-image](https://github.com/riyadhalnur/node-base64-image)