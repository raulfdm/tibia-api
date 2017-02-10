const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = function() {
    const app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());

    consign({ cwd: 'src' })
        .include('api')
        .then('routes')
        .into(app);

    return app;
}