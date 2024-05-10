
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/info') {
    const cpuInfo = os.cpus();
    const osInfo = {
      platform: os.platform(),
      arch: os.arch(),
      release: os.release()
    };
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    res.end(JSON.stringify({ cpuInfo, osInfo }));
  } else {
    setTimeout(() => {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
      res.end(`Hello from server! ( delayed by ${Math.random() * 2000}ms )`);
    }, Math.random() * 2000);
  }
});

server.listen(5500, () => {
  console.log('Server is working perfectly');
});

