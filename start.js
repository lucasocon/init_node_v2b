var server = require('./server');
var router = require('./router');
var requests = require('./requests');

var handler = {};
handler['/'] = requests.home;
handler['/page1'] = requests.page1;
handler['/page2'] = requests.page2;
handler['/favicon.ico'] = requests.favicon;

server.init(router.route, handler);
