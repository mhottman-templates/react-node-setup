'use strict';
require('dotenv').config();
var express = require('express'),
    app = express();
var http = require('http').Server(app);
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt')
var jwt = require('jsonwebtoken');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/api', expressJWT({
    secret: 'super secret stuff'
}).unless({path: [
    '/api/auth/login',
    '/api/auth/signup',
    '/api/auth/logout',
    '/api/auth/isAuthenticated'
]}));


var index = require('./routes/app/index');
var api = require('./routes/api/api');

app.use('/api', api);
app.use('/', index);


http.listen(3000, function() {
    console.log("port 3000");
});
