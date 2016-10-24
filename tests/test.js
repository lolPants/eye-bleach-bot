/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  Tests Module
*/
const EyeBleach = require('../src/api.js')
const eyebleach = new EyeBleach()

eyebleach.getImage('aww', 'top')
  .then(url => {
    console.log(url)
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })