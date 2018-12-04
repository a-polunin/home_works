// nodemon --experimental-modules home-work-nodejs-fs/index.mjs

import fs from 'fs'
import http from 'http'
import URL from 'url'
import data from './static/data.json'
//
const arr = [{
  asdf: 'asdf'
}]

http.createServer((request, response) => {
  const url = URL.parse(request.url)
  const jsonToSave = [];
  console.log(url.parse(request.url))
  if (url.pathname === '/' || url.pathname === '/index.html') {
    response.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'))
  }

  if (~url.pathname.indexOf('/json')) {
    console.log(url.pathname)
    const query = url.query;
    const req = query.split('=')[1] || '';
    const compariedArray = data.filter(el => {
      return el.toLowerCase().indexOf(req.toLowerCase()) >= 0;
    });

    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    // response.write();
    response.end(JSON.stringify(compariedArray));
  }

  if (~url.pathname.indexOf('/file')) {
    const query = url.query;
    const req = url.search;
    console.log(request.method);
    jsonToSave.push(req);
    fs.appendFileSync('./home-work-nodejs-fs/static/test.json', JSON.stringify(jsonToSave));
    res.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'));
  }
  // res.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'));
}).listen(3000)