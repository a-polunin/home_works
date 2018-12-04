const data = require('./home-work').data
const parser = require('./home-work').parser
const fs = require('fs')
const htmlFileText = fs.readFileSync('./home-work/index.html','utf-8')


console.log(parser(data))
console.log('**********')
console.log(htmlFileText)