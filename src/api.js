/*
  Eye Bleach Bot
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License

  API Module
*/

// Dependencies
const request = require('superagent')
const b64 = require('node-base64-image')

class EyeBleach {
  /**
   * Get from Reddit
   * @private
   * @param {string} [subreddit] - Subreddit to Crawl
   * @param {string} [level] - Top / New / Hot etc
   * @returns {Promise.<Object>}
   * @throws {Promise.<Error>}
   */
  _getFromReddit (subreddit = `aww`, level = `top`) {
    return new Promise((resolve, reject) => {
      request
        .get(`https://www.reddit.com/r/${subreddit}/${level}.json?limit=100`)
        .set(`Accept`, `application/json`)
        .end((err, res) => {
          if (err) reject(err)
          else if (res.status !== 200) reject(res.status)
          else resolve(res.body)
        })
    })
  }

  /**
   * Parse Reddit Response
   * @private
   * @param {Object} body - Response from GetFromReddit
   * @returns {Promise.<Array>}
   * @throws {Promise.<Error>}
   */
  _parseReddit (body) {
    return new Promise((resolve, reject) => {
      if (!body) reject(new Error(`Body not specified`))
      let json = body.data.children
      json = json.map(obj => obj.data.url)
      json = json.filter(url => url.match(/\.(jpeg|jpg|gif|png)$/))
      resolve(json)
    })
  }

  /**
   * Get Random element from an Array
   * @private
   * @param {Array} arr - Input Array
   * @returns {Promise}
   * @throws {Promise.<Error>}
   */
  _randFromArray (arr) {
    return new Promise((resolve, reject) => {
      if (!arr) reject(new Error(`Array not specified`))
      resolve(arr[Math.floor(Math.random() * arr.length)])
    })
  }

  /**
   * Gets a Buffer Object from an image URL
   * @private
   * @param {string} url - Image URL
   * @returns {Promise.<Buffer>}
   * @throws {Promise.<Error>}
   */
  _urlToBuffer (url) {
    return new Promise((resolve, reject) => {
      if (!url) reject(new Error(`URL not specified`))
      b64.encode(url, {}, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  /**
   * Get random Eyebleach Image Buffer
   * @private
   * @param {string} [subreddit] - Subreddit to Crawl
   * @param {string} [level] - Top / New / Hot etc
   * @returns {Promise.<Buffer>}
   * @throws {Promise.<Error>}
   */
  getBuffer (subreddit = `aww`, level = `top`) {
    return new Promise((resolve, reject) => {
      this._getFromReddit(subreddit, level)
        .then(this._parseReddit)
        .then(this._randFromArray)
        .then(this._urlToBuffer)
        .then(this._tweetMedia)
        .then(resolve)
        .catch(reject)
    })
  }
}

// Export Class
module.exports = EyeBleach
