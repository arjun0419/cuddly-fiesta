const fs = require('fs');
const path = require('path');

const db = require('../client/db/dbIndex');

module.exports.serveHTML = (request, response) => {
  fs.readFile('./client/index.html', 'UTF-8', (err, html) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(html);
  });
};

module.exports.serveCSS = (request, response) => {
  const cssPath = path.join(__dirname, '../client', request.url);
  const fileStream = fs.createReadStream(cssPath, 'UTF-8');
  response.writeHead(200, { 'Content-Type': 'text/css' });
  fileStream.pipe(response);
};

module.exports.serveClientBundle = (request, response) => {
  const bundlePath = path.join(__dirname, '../client/dist', request.url);
  const fileStream = fs.createReadStream(bundlePath, 'UTF-8');
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  fileStream.pipe(response);
};

// module.exports.serveServerBundle = (request, response) => {
//   const serverBundlePath = path.join(__dirname, '../client', request.url);
//   const fileStream = fs.createReadStream(serverBundlePath, 'UTF-8');
//   response.writeHead(200, { 'Content-Type': 'application/javascript' });
//   fileStream.pipe(response);
// };

module.exports.saveGuestSession = (request, response) => {
};

module.exports.createUser = (request, response) => {

};

module.exports.serverUserData = (request, response) => {
};

module.exports.authenticateUser = (request, response => {

};
