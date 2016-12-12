/*
 Module dependencies
 */
var express = require('express');
var httpProxy = require('http-proxy');


server = express();
server.set('port', 3000);

// Serve static directory where our angular app is located.
server.use(express.static(__dirname));

// proxy server for morningstar
var proxy = httpProxy.createProxyServer();

//
// Listen for the `error` event on `proxy`.
//
proxy.on('error', function (err, req, res) {
    console.log(err);
});

//
//
//
// Grab all requests to the server with "/ms/".
server.all("/api/rest.svc/*", function (req, res) {
    console.log("Request made to morningstar: http://tools.morningstar.be/" + req.url);
    proxy.web(req, res, {target: 'http://tools.morningstar.be/'});
});


server.listen(server.get('port'), function () {
    console.log('Express server listening on port ' + server.get('port'));
});

