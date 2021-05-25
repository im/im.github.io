const simpleGit = require('simple-git')
require('./deletePersonal.js')
require('./getNotes.js')

setTimeout(() => {
    simpleGit()
    .add('./*')
    .commit('notes updates')
    .push(['-u', 'origin', 'main'], (e) => {
        // console.log('e: ', e);
    })
}, 3000)
