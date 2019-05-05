const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
    name : {
        type : String,
        default : null
    },
    thumbnail : {
        type :String,
        default : null
    },
    address : {
        type : String,
        default : null
    },
    address_city : {
        type : String,
        default : null
    },
    address_region : {
        type : String,
        default : null
    },
    recommand : {
        type : String,
        enum : ["N", "H", "R"]
        //신규, 인기, 추천
    },
    category : {
        type : String,
        enum : ["cafe", "job", "activity", "amusement", "museum", "exhibit", "show", "festival", "other"]
        //테마카페 , 직업체험, 액티비티, 놀이공원, 박물관, 전시, 공연, 축제, 기타
    },
    manager_name : {
        type : String,
        default : null
    },
    info_general : {
        type : String,
        default : null
    },
    business_hour : {
        type : Number,
        default : null
    },
    closed_days : {
        type : Number,
        default : null
    },
    phone_num : {
        type : Number,
        default : null
    },
    register_date : {
        type : Date,
        default : Date.now()
    }
},{
    versionKey : false
});

module.exports = mongoose.model('Partner', partnerSchema);