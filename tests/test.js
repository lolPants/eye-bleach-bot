/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  Tests Module
*/

// Config
let config = {}
try  {
  config = require('../config.js')
} catch (ex) { }

// Dependencies
const EyeBleach = require('../src/api.js')
const eyebleach = new EyeBleach(config)

// Test Getting of Image
eyebleach.getImage('aww', 'top')
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })