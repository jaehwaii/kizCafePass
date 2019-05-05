const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
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
        type : Date,
        expires : 3600
    }
});

module.exports = mongoose.model('Event', eventSchema);