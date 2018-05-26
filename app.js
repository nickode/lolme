//imports

//npm modules
const express = require('express');
const body_parser = require('body-parser');
const request = require('request');

//in-house modules
const riot_api = require('./lib/riot_api.js');


//const
const app = express();
const RiotApiCalls = new riot_api();
const PORT = 3000;

app.locals.summoner_name = null;
app.locals.error = null;

app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});


app.post('/summoner-profile', function(req, res){

    let url = RiotApiCalls.get_summonerv3(req.body.summoner_name);

    request(url, function(err, response, body){
        if(err){

            res.render('index', {summoner:null, error: 'An error occured while searching this summoner name'})

        }else{
            let summonerV3 = JSON.parse(body);
            
            let summonerProfile = {
                summoner_name:summonerV3.name, 
                summoner_id:summonerV3.accountId
            };

            res.render('summonerProfile', summonerProfile);
            
        }
    });
});   


app.listen(PORT, function(){
    console.log('App listening on port ' + PORT);
});
