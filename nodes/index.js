let server = require('./servers');
let router = require('./route');
let requestHandles = require('./requestHandles')
let handles = {};
handles['/'] = requestHandles.start;
handles['/start'] = requestHandles.start;
handles['/upload'] = requestHandles.upload;
server.start(router.route,handles);