const http = require('http');
const router = require('./router');

const port = process.env.PORT || 3000;

http.createServer((request, response) => {
  if (request.url === '/') {
    router.serveHTML(request, response);
  } else if (request.url === '/style.css') {
    router.serveCSS(request, response);
  } else if (request.url === '/guest.css') {
    router.serveGuestcss(request, response);
  } else if (request.url === '/bundle.js') {
    router.serveClientBundle(request, response);
  } else if (request.url === '/server-bundle.js') {
    router.serveServerBundle(request, response);
  } else if (request.url.split('/')[1] === 'restaurants' && request.url.split('/')[3] === 'reviews') {
    router.serveRestaurant(request, response);
  } else if (request.url === '/guest') {
    router.serveGuestHtml(request, response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(port);
