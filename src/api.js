/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  API Module
*/

// Dependencies
const request = require('request')
const twit = require('twit')
const b64 = require('node-base64-image')

// Helper Functions
let shuffleObj = function(n){for(var r=Object.keys(n).map(function(r){return n[r]}),t=0;t<r.length-1;t++){var e=t+Math.floor(Math.random()*(r.length-t)),a=r[e];r[e]=r[t],r[t]=a}return r}

// Define Class
let EyeBleach = function (conf) {
  if (conf === undefined) throw new Error('Undefined Config')
  this.config = conf
}

// Reddit Function
let getFromReddit = function (subreddit, level) {
  return new Promise(function (resolve, reject) {
    request(`https://www.reddit.com/r/${subreddit}/${level}.json?limit=100`, function (error, response, body) {
      
      if (!error && response.statusCode === 200) {
        let data = shuffleObj(JSON.parse(body).data.children)

        let arr = []        
        for (obj in data) {
          let item = data[obj].data
          if ( item.url.match(/\.(jpeg|jpg|gif|png)$/) != null ) {
            arr.push(item.url)
          }
          resolve(arr)
        }
      } else {
        reject()
      }
    })
  })
}

let postToTwitter = function (config, image) {
  return new Promise(function (resolve, reject) {
    // Handle undefined args
    if (config === undefined) reject(new Error('Undefined Config'))
    if (image === undefined) reject(new Error('Undefined Config'))

    let T = new twit(config)

    T.post('media/upload', { media_data: image }, function (err, data, response) {
      let mediaIdStr = data.media_id_string
      let params = { status: "", media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })
}
EyeBleach.prototype.postImage = function (url) {
  let config = this.config
  
  return new Promise(function (resolve, reject) {
    b64.encode(url, {string: true}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        postToTwitter(config, res)
          .then(resolve)
          .catch(reject)
      }
    })
  })
}

// Get Image from Reddit
EyeBleach.prototype.getImage = function (subreddit, level, times = 1) {
  return new Promise(function (resolve, reject) {
    let array = getFromReddit(subreddit, level)
    array.then(arr => {
      let returns = []
      times = times - 1

      for (let i = arr.length; i >= 0; i--) {
        if (i > times) arr.splice(i, 1)
      }
      resolve(arr)
    })
  })
}

// Export Class
module.exports = EyeBleach