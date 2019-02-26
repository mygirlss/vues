let http = require('http');
let url = require('url');
function start(route,handles){
	function server(request,response){
        var pathname = url.parse(request.url).pathname;
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('ainiyanqi');
		response.end();
		route(handles,pathname);
        console.log("Request for " + pathname + " received.");
	}
	http.createServer(server).listen(8888);
}
exports.start = start;

	
