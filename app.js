var Hapi = require('hapi');
var Good = require('good');
var Inert = require('inert');


// Create a server with a host and port
var server = new Hapi.Server();
server.register(Inert, function () {});
server.connection({
    port: 8080
});


server.route({
    method: 'GET',
    path:'/ping',
    handler: function (request, reply) {
        reply("pong hahaha");
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            index: true

        }
    }
});


server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
