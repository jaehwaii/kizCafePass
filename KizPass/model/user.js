const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : String,
    email : {
        type : String,
        required : true
    },  //이메일
    pw : {
        type : String,
        required : true
    },  //패스워드
    type : {
        type : String,
        enum : ["어린이", "어른"]
    },//회원 유형
    age : {
        type : Number,
        default : null
    },   //나이
    phone_num : {
        type :String,
        default : null
    }, //휴대폰 번호
    points : {
        type : Number,
        default : 0
    },
    preference : {
        type : String,
        enum : ["cafe", "job", "activity", "amusement", "museum", "exhibit", "show", "festival", "other"]
        //테마카페 , 직업체험, 액티비티, 놀이공원, 박물관, 전시, 공연, 축제, 기타
    },
    address : {
        type : String,
        default : null
    },
    marketing : {
        type : Boolean,
        default : true
    },
    gender : {
        type : String,
        enum : ["M", "F"],
        default : null
    },
    birthday : {
        type : String,
        default : null
    }
},{
    versionKey : false
});

module.exports = mongoose.model('User', userSchema);