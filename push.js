module.exports = (() => {
    const simpleGit = require('simple-git')
    const moment = require('moment')
    require('./deletePersonal.js')
    require('./getNotes.js')
    // require('./clear.js')

    setTimeout(() => {
        simpleGit()
            .add('./*')
            .commit(`notes update ${moment().format('yyyy-MM-DD HH:mm:ss')}`)
            .push(['-u', 'origin', 'main'], (e) => {
                require('./clear.js')
            })
    }, 3000)
})()
