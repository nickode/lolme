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

app.locals.name = null;
app.locals.id = null;
app.locals.error = null;
app.locals.rank = null;
app.locals.losses = 0;

app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});


app.post('/summoner-profile', function(req, res){

    let summonerProfile = null;

    request(RiotApiCalls.get_summonerv3(req.body.name), function(err, response, body){
        if(err){

            res.render('index', {error: 'An error occured while searching this summoner name'});

        }else{
            let summonerV3 = JSON.parse(body);
            
            summonerProfile = {
                name:summonerV3.name, 
                id:summonerV3.accountId,
                rank:'',
                losses:0
            };

            console.log(summonerProfile.id)
            
            request(RiotApiCalls.get_leaguev3(summonerProfile.id), function(err, response, body){
                if(err){
                    res.render('index', {error: 'An error occured while searching this summoner name'});
                }else{
                    let leagueV3 = JSON.parse(body);
                    summonerProfile.rank = leagueV3.rank;
                    summonerProfile.losses = leagueV3.losses;
                    console.log(leagueV3.rank);
                    console.log(leagueV3.losses);

                    
                }
               
            });
        }
        res.render('summonerProfile', summonerProfile);

    });


    

   

});   


app.listen(PORT, function(){
    console.log('App listening on port ' + PORT);
});
