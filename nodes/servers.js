let http = require('http');
let url = require('url');
function start(route,handles){
	function server(request,response){
        var pathname = url.parse(request.url).pathname;
		
		route(handles,pathname,response);
	}
	http.createServer(server).listen(9527);
}
exports.start = start;

	
