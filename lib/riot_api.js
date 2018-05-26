class RiotApiCalls{
    
    constructor(){
        this.prefix = 'https://na1.api.riotgames.com';
        this.api_key = 'RGAPI-fe47adbc-6f51-4f2f-a8d7-3817508a2845';
    }
    
    get_summonerv3(summonerName){
        return this.prefix + `/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${this.api_key}`;
    };
};

module.exports = RiotApiCalls;