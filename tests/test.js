/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  Tests Module
*/

const config = require('../config.js')

// Dependencies
const EyeBleach = require('../src/api.js')
const eyebleach = new EyeBleach()

// Test Getting of Image
eyebleach.getBuffer()
  .then(body => {
    console.log(body)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
