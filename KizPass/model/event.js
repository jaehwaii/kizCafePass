const mongoose = require('mongoose');
const moment = require('moment');

const eventSchema = mongoose.Schema({
    _id : String,
    title : {
        type : String,
        default : null
    },
    thumbnail : {
        type : String,
        default : null
    },
    ongoing : {
        type : Boolean,
        default : true
    },
    contents : {
        type : String,
        default : null
    },
    end_date : {
        type : Number
    }
},{
    versionKey : false
});

module.exports = mongoose.model('Event', eventSchema);