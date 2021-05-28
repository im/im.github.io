const fs = require('fs')
const path = require('path')
const moment = require('moment')
const bearPath = path.join(__dirname, 'bear')
let fsWait = false
fs.watch(bearPath, function (event, filename) {
    if (filename) {
        if (fsWait) return
        fsWait = setTimeout(() => {
            fsWait = false
        }, 10000)
        require('./push.js')
        console.log(`update ${moment().format('yyyy-MM-DD HH:mm:ss')}`)
    }
})
