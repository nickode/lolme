class RiotApiCalls{
    
    constructor(){
        this.prefix = 'https://na1.api.riotgames.com';
        this.api_key = 'RGAPI-63dcdd5a-2b19-42fb-8473-11ec433e39a9';
    }
    
    get_summonerv3(summonerName){
        return this.prefix + `/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${this.api_key}`;
    };

    get_leaguev3(summonerId){
        return this.prefix + `/lol/league/v3/positions/by-summoner/${summonerId}?api_key=${this.api_key}`;
    };
};

module.exports = RiotApiCalls;