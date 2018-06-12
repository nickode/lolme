'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    name: { type: String },
    level: { type: Number },
    display_rank: { type: String }
});

module.exports = mongoose.model('Profiles', ProfileSchema);