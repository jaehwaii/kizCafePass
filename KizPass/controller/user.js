const mongoose = require('mongoose');

const User = require('../model/user');

exports.user_signup = (req, res) => {
    User.find({email : req.body.email})
    .then(user => {
        if(user.length >= 1){
            return res.status(409).json({message : "Email exists"})
        } else{
            const user = new User({
                _id : new mongoose.Types.ObjectId(),
                email : req.body.email
            });
            user.save()
            return res.status(200).json(user)
        }
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err)
    })
}