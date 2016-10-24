/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  Tests Module
*/

// Config
const config = require('../config.js')

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

eyebleach.postImage('https://i.redd.it/v0n0mjazw7tx.jpg')
  .then(img => {
    console.log(img)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })