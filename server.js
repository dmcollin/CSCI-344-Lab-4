var http = require('http'); 
var redis = require('redis');//have to also require redis (create redis client, in the create server function connect to redis and get values)

var client = redis.createClient(); 

http.createServer(function (req, res) {


	client.mget(['awesome', 'cool', 'rad', 'gnarly', 'groovy'], function(error, responses){
		console.log(responses);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Awesome: ' + responses[0] + '<br /> Cool: ' + responses[1] + '<br /> Rad: ' + responses[2] + '<br /> Gnarly: ' + responses[3] + '<br /> Groovy: ' + responses[4] );

	});

}).listen(3000);

console.log('Server running on port 3000');