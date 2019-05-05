const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
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
        default : Date.now()
    },
    check : {
        type : Boolean,
        default : true,
        required : true
    }
},{
    versionKey : false
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);