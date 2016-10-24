/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License
  
  Main Module
*/

// Config
const config = require('../config.js')

// Dependencies
const EyeBleach = require('./api.js')
const eyebleach = new EyeBleach(config)

let postEyeBleach = function () {
  eyebleach.getImage('aww', 'top')
    .then(url => {
      url = url[0]
      console.log(url)
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
}

postEyeBleach()