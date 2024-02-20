const http = require('node:http');
const { URL } = require('url');
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;
const origin = `http://${hostname}:${port}`;

const server = http.createServer((req, res) => {

  const url = new URL(req.url, origin);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n' + parse(url.search.substring(1)).test);
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${origin}`);
});