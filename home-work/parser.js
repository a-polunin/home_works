const objParserToHtml = (data) => {
  // console.log(data)
  return `<${data.tag}${data.attributes ? 
    Object.keys(data.attributes).map(attr=> ` ${attr}="${data.attributes[attr]}"`)
    :
    ''}>${data.childs.map((child)=> typeof child === 'string' ?  child : objParserToHtml(child))
    .join('')}</${data.tag}>`
}

module.exports = {
  objParserToHtml:objParserToHtml
}