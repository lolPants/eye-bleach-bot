/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  Tests Module
*/

// Dependencies
const EyeBleach = require('../src/api.js')
const eyebleach = new EyeBleach(require('../config.js') || {})

// Test Getting of Image
eyebleach.getImage('aww', 'top')
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })