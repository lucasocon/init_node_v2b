var server = require('http');
var url    = require('url');
var fs     = require('fs');

function initialize(route, handler) {
  function runServer(req, res) {

    var root = url.parse(req.url).pathname

    if (root== "/") {
      root = 'index.html';
    };

    console.log("Somebody is online!");

    // var content = route(handler, root, res);
    var index = fs.readFileSync('www/'+ root);

    var log = fs.createWriteStream('log.txt', { "flags": 'a' });
    log.write(root + '\n');

    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(index);
    res.end();

  }
  server.createServer(runServer).listen(8888);
}

exports.init = initialize;
