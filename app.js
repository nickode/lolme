//imports

//npm modules
const express = require('express');
const body_parser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
const Profile = require('./api/models/lolmeModel');

//in-house modules
const riot_api = require('./lib/riot_api.js');

//const
const app = express();
const RiotApiCalls = new riot_api();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:<root>@lolme-profiles-rxcsm.mongodb.net/test?retryWrites=true');

app.use(express.static('public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'});
// });

app.set('view engine', 'ejs');

var routes = require('./api/routes/lolmeRoutes');
routes(app);

app.get('/', function(req,res){
    res.render('index');
});

app.listen(PORT, function(){
    console.log('App listening on port ' + PORT);
});
