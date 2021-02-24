const path = require('path')

function localityModule () {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'locality.js'
  })
}

module.exports = localityModule
module.exports.meta = require('../package.json')
