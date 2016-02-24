var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var debug = require('debug')('passport-mongo');
var passport = require('passport');
var LocalStrategy= require('passport-local').Strategy;
var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');

var usersController = require('./server/controllers/users-controller');
var productsController = require('./server/controllers/products-controller');
var homeController = require('./server/controllers/homecontrol');
mongoose.connect('mongodb://admin:shieldsure747@ds011288.mongolab.com:11288/shieldsures');
//mongodb://localhost:27017/shieldsure
app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));

var User = mongoose.model('User');  



app.get('/', function(req, res){
    res.sendfile('index.html');
});
app.get('/home', function(req, res){
    res.sendfile('app/home/home.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);

app.post('/api/home/updateUsernamee', homeController.updateUsernamee);
//User
app.get('/api/users/get', usersController.getUsers);

//Product
app.post('/api/product/product', productsController.buyProduct);
app.post('/api/product/billPic', multipartMiddleware, productsController.updatePic);
app.listen('3000', function (){
    console.log("Listening for Local Host 3000");
});