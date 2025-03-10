const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const publicDir = path.join(__dirname, 'public');

http.createServer((req, res) => {
  let filePath = req.url === '/' 
    ? path.join(publicDir, 'index.html') 
    : path.join(publicDir, req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>404 - Page Not Found</h1>');
    }
    // Basic MIME type handling
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'text/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.json') contentType = 'application/json';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    if (ext === '.gif') contentType = 'image/gif';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data, 'utf-8');
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
