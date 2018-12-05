// nodemon --experimental-modules home-work-nodejs-fs/index.mjs

import fs from 'fs'
import http from 'http'
import URL from 'url'
import data from './static/data.json'
//
const arr = [{
  asdf: 'asdf'
}]

const jsonToSave = [];
const defaultFilePath = './home-work-nodejs-fs/static/';

http.createServer((request, response) => {
  const url = URL.parse(request.url)
  const query = url.query;
  console.log(url.parse(request.url))
  if (url.pathname === '/' || url.pathname === '/index.html') {
    response.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'))
  }

  if (~url.pathname.indexOf('/json')) {
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

  if (~url.pathname.indexOf('/create')) {
    const req = query.split('=')[1];
    if(req){
      fs.writeFileSync(defaultFilePath + req, req);
      response.end(JSON.stringify(arr));
    }else{
      console.log('Gde nazvanie?!')
    }
  }

  if (~url.pathname.indexOf('/check')) {
    const fileName = query.match(/=(.*)&/g);
    const data = query.match(/&(.*)/g);
    const filePath = defaultFilePath + fileName[0].slice(1, -1);

    fs.stat(filePath, function(err, stat) {
      if(err == null) {
          fs.appendFileSync(filePath, data[0].slice(1));
      } else if(err.code == 'ENOENT') {
          fs.writeFileSync(filePath, data[0].slice(1));
      } else {
          console.log('Oshibka: ', err.code);
      }
  });
    response.end(JSON.stringify(arr));
  }

  if (~url.pathname.indexOf('/show')) {
    const req = query.split('=')[1] || 'index.html';
    const fileData = fs.readFileSync(defaultFilePath + req, "utf8");
    response.end(JSON.stringify(fileData));
  }

  if (~url.pathname.indexOf('/save')) {
    const req = query.split('=')[1] || '';
    jsonToSave.push(req);
    fs.writeFileSync('./home-work-nodejs-fs/static/test.json', JSON.stringify(jsonToSave));
    response.end(JSON.stringify(arr));
  }

  if (~url.pathname.indexOf('/delete')) {
    const req = query.split('=')[1];
    if(req){
      fs.unlinkSync(defaultFilePath + req);
      response.end(JSON.stringify(arr));
    }else{
      console.log('oshibka')
    }

  }
  // res.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'));
}).listen(3000)