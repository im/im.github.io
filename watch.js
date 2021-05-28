const fs = require('fs')
const path = require('path')
const bearPath = path.join(__dirname, 'bear')
fs.watch(bearPath, function (event, filename) {
    require('./push.js')
})
