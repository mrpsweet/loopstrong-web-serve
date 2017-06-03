module.exports = function(server) {
    var router = server.loopback.Router();
	var version = require('../../package.json').version;

    router.get('/version', function(req, res) {
        res.send(version);
    });
    server.use(router);
};