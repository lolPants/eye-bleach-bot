/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License
  
  Main Module
*/

// Config
const config = require('../config.js')

// Dependencies
const FancyLog = require('fancylog')
const log = new FancyLog()
const EyeBleach = require('./api.js')
const eyebleach = new EyeBleach(config)

let postEyeBleach = function () {
  eyebleach.getImage('aww', 'top')
    .then(url => {
      url = url[0]
      
      eyebleach.postImage(url)
        .then(() => {
          log.i('EyeBleach Posted')
        })
        .catch(err => {
          log.e('Error Posting Eyebleach')
        })
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
}

postEyeBleach()
setInterval(function() {
  try {
    postEyeBleach()
  } catch (e) {
    log.e(e);
  }
}, 60 * 60 * 1000);