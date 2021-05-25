module.exports = (() => {
    const fs = require('fs')
    const path = require('path')
    const bearPath = path.join(__dirname, 'bear')

    const getTitle = (cont) => {
        const title = cont.match(/^(#+)(.*)/g)
            ? cont.match(/^(#+)(.*)/g)[0]
            : ''
        return title.replace(/#/g, '').replace(/\s/g, '')
    }

    function deleteFolder(path) {
        let files = []
        if (fs.existsSync(path)) {
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
        }
    }

    const formatTags = (cont) => {
        const tages = []
        const arr = (cont.match(/#[A-Za-z\/\d]+/g) || []).map((v) =>
            v.replace(/#/g, '')
        )
        arr.forEach((item) => {
            if (item.split('/').length) {
                item.split('/').forEach((t) => {
                    tages.push(t)
                })
            } else {
                tages.push(item)
            }
        })
        return tages
    }

    const mdFiles = []
    const images = []

    const getFiles = (p) => {
        let files = []
        if (fs.existsSync(p)) {
            files = fs.readdirSync(p)
            files.forEach(function (file, index) {
                let curPath = p + '/' + file
                if (fs.statSync(curPath).isDirectory()) {
                    getFiles(curPath)
                } else {
                    if (/(.md)$/.test(file)) {
                        mdFiles.push(curPath)
                    } else {
                        images.push(curPath)
                    }
                }
            })
        }
    }

    getFiles(bearPath)

    const ignore = []

    mdFiles.forEach((md, index) => {
        const buffer = fs.readFileSync(md)
        const mdContent = String(buffer)
        const tags = formatTags(mdContent)
        const title = getTitle(mdContent)
        if (~tags.indexOf('personal') || ~tags.indexOf('english') || ~tags.indexOf('welcome')) {
            ignore.push(title)
            fs.unlinkSync(md)
        }
    })

    if (fs.existsSync(bearPath)) {
        let files = fs.readdirSync(bearPath)
        files.forEach(function (file, index) {
            let curPath = bearPath + '/' + file
            if (fs.statSync(curPath).isDirectory()) {
                if (~ignore.indexOf(file)) {
                    deleteFolder(curPath)
                }
            }
        })
    }
})()
