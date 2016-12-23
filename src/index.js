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
const eyebleach = new EyeBleach()
const Twit = require('twit')
const T = new Twit(config)

const postEyeBleach = () => {
  eyebleach.getBuffer()
    .then(image => {
      T.post('media/upload', { media_data: image }, (err, data) => {
        if (err) log.e(err)

        let mediaIdStr = data.media_id_string
        let params = { status: '', media_ids: [mediaIdStr] }

        T.post('statuses/update', params, (err, data) => {
          if (err) log.e(err)
          log.i(data)
        })
      })
    })
    .catch(err => log.e(err))
}

postEyeBleach()
setInterval(() => {
  try {
    postEyeBleach()
  } catch (e) {
    log.e(e)
  }
}, 60 * 60 * 1000)
