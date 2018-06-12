var mongoose = require('mongoose'),
    Profile = mongoose.model('Profiles');

    exports.get_profile = function(req, res){
        Profile.findById(req.params.profileId, function(err, profile){
            if(err)
                res.send(err);
            res.json(profile);
        });
    };