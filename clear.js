const fs = require('fs')
const path = require('path')
const bearPath = path.join(__dirname, 'bear')

function deleteFolder(path) {
    let files = []
    if (fs.existsSync(path) && fs.statSync(path).isDirectory()) {
        files = fs.readdirSync(path)
        files.forEach(function (file, index) {
            let curPath = path + '/' + file
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    } else {
        fs.unlinkSync(path)
    }
}

if (fs.existsSync(bearPath)) {
    let files = fs.readdirSync(bearPath)
    files.forEach(function (file, index) {
        let curPath = bearPath + '/' + file
        deleteFolder(curPath)
    })
}
