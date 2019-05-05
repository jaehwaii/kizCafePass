const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
    partner : {
        type : String,
        ref : 'Partner'
    },
    user : {
        type : String,
        ref : 'User'
    },
    date : {
        type : Date,
        default : Date,now()
    },
    used_points : {
        type : Number,
        default : null
    },
    original_points : {
        type : Number,
        default : null
    },
    left_points : {
        type : Number,
        default : null
    }
},{
    versionKey : true
});

module.exports = mongoose.model('Point', pointSchema);