var examples = require('../controllers/examples.js');
var path = require('path');

module.exports = function(app) {
    app.post('/api/examples/create', function(req, res) {
        examples.create(req, res);
        console.log('example.add route hit');
    });

    app.get('/api/examples/read', function(req, res) {
        examples.read(req, res);
        console.log('example.read route hit');
    });

    app.post('/api/examples/update', function(req, res) {
        examples.update(req, res);
        console.log('example.update route hit')
    })

    app.post('/api/examples/destroy', function(req, res) {
        examples.destroy(req, res);
        console.log('example.delete route hit');
    })

    app.all('*', function(req, res) {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};