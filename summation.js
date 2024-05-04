  const http = require('http');
const url = require('url');

function onRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const { numbers } = parsedUrl.query;
    
    const numberArray = numbers.split(',').map(Number);
    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Sum: ${sum}`);
    res.end();
}

http.createServer(onRequest).listen(4001);
console.log('Server has started...');