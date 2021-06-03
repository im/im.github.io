module.exports = (() => {
    const fs = require('fs')
    const path = require('path')
    const md5 = require('md5-node')
    const moment = require('moment')
    const bearPath = path.join(__dirname, 'bear')
    const outPath = path.join(__dirname, '/source/_posts/')
    const outImgPath = path.join(__dirname, '/source/images/')
    const datePath = path.join(__dirname, 'date.js')

    deleteFolder(outPath)
    // deleteFolder(outImgPath)

    function setDate(obj) {
        if (fs.existsSync(datePath)) {
            const d = require('./date.js')
            Object.keys(obj).forEach((item) => {
                const arr = Object.keys(d)
                if (!arr.includes(item)) {
                    d[item] = moment().format('yyyy-MM-DD hh:mm:ss')
                }
            })
            const str = `module.exports = ${JSON.stringify(d)}
            `
            fs.writeFileSync(datePath, str, 'utf-8')
        } else {
            const str = `module.exports = ${JSON.stringify(obj)}
            `
            fs.writeFileSync(datePath, str, 'utf-8')
        }
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
        const tags = []
        const m = cont.match(/(.+)/g)
        if (m) {
            const arr = (m[m.length - 1].match(/#[A-Za-z\/\d]+/g) || []).map(
                (v) => v.replace(/#/g, '')
            )
            arr.forEach((item) => {
                if (item.split('/').length) {
                    item.split('/').forEach((t) => {
                        tags.push(t)
                    })
                } else {
                    tags.push(item)
                }
            })
        }
        // console.log(m[m.length - 1])
        // const arr = (cont.match(/#[A-Za-z\/\d]+/g) || []).map((v) =>
        //     v.replace(/#/g, '')
        // )
        // arr.forEach((item) => {
        //     if (item.split('/').length) {
        //         item.split('/').forEach((t) => {
        //             tags.push(t)
        //         })
        //     } else {
        //         tags.push(item)
        //     }
        // })
        return tags
    }

    const getTitle = (cont) => {
        const title = cont.match(/^(#+)(.*)/g)
            ? cont.match(/^(#+)(.*)/g)[0]
            : ''
        return title.replace(/#/g, '')
    }

    const getDate = (cont) => {
        const d = cont.match(/::(\d+)年(\d+)月(\d+)日::/g)
        if (d) {
            return d[0].replace(/[::日]/g, '').replace(/[年月]/g, '-')
        }
        return ''
    }

    function PrefixInteger(num, n) {
        return (Array(n).join(0) + num).slice(-n)
    }

    const getFontMatter = (payload) => {
        const { tags, title, categories, index, date } = payload
        const obj = {
            title,
            tags,
            date,
            categories: [categories],
            cover: `https://cdn.jsdelivr.net/gh/im/oss@master/gallery/${PrefixInteger(
                index % 40 || 1,
                2
            )}.svg`,
            thumbnail: `https://cdn.jsdelivr.net/gh/im/oss@master/gallery/${PrefixInteger(
                index % 40 || 1,
                2
            )}.svg`,
        }

        return `---
    ${JSON.stringify(obj, null, 2)}
---
    `
    }

    const replaceContent = (content, fontMatter) => {
        // content = content.replace(/#[A-Za-z\/\d]+/g, '')
        content = content.replace(/^(#+)(.*)/g, '')
        content = content.replace(/::(\d+)年(\d+)月(\d+)日::/g, '')
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (res, $1, $2) => {
            const arr = $2.split('/')
            return `![](/images/${arr[arr.length - 1]})`
        })
        // const reg = /(\n)/g
        // let index = 1
        // content = content.replace(reg, (reg, $1, $2) => {
        //     if (index === 10) {
        //         index++
        //         return '\n <!--more-->'
        //     }
        //     index++
        //     return reg
        // })
        return fontMatter + content
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
            // fs.rmdirSync(path)
        }
    }

    getFiles(bearPath)

    const md5Obj = {}
    mdFiles.forEach((md, index) => {
        const buffer = fs.readFileSync(md)
        const mdContent = String(buffer)
        const title = getTitle(mdContent)
        md5Obj[md5(title)] = moment().format('yyyy-MM-DD hh:mm:ss')
    })

    setDate(md5Obj)
    const d = require('./date.js')
    mdFiles.forEach((md, index) => {
        const buffer = fs.readFileSync(md)
        const mdContent = String(buffer)
        const tags = formatTags(mdContent)
        const title = getTitle(mdContent)
        const hash = md5(title)
        const date = d[hash]
        const categories = tags[0] || ''

        const content = replaceContent(
            mdContent,
            getFontMatter({ tags, title, categories, index, date })
        )

        fs.existsSync(outPath) || fs.mkdirSync(outPath)
        const categoriesPath = path.join(outPath, categories)
        fs.existsSync(categoriesPath) || fs.mkdirSync(categoriesPath)
        const filePath = path.join(categoriesPath, `${hash.toString().substr(0, 10)}.md`)
        fs.existsSync(filePath) || fs.writeFileSync(filePath, content, 'utf-8')
    })

    images.forEach((img, index) => {
        const name = img.split('/')[img.split('/').length - 1]
        fs.existsSync(outImgPath) || fs.mkdirSync(outImgPath)
        const filePath = path.join(outImgPath, name)
        if (!fs.existsSync(filePath)) {
            var readStream = fs.createReadStream(img)
            var writeStream = fs.createWriteStream(filePath)
            readStream.pipe(writeStream)
        }
    })
})()
