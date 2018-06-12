module.exports = function(app){
    var profile = require('../controllers/lolmeController');

    app.route('/profiles/:profileId')
        .get(profile.get_profile);
}