function route(handles,pathname){
	console.log('a request for'+pathname);
	if(typeof handles[pathname]=='function'){
		handles[pathname]()
	}else{
		console.log('undefined')
	}
}
exports.route = route;