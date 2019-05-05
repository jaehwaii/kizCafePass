const mongoose = require('mongoose');

const User = require('../model/user');

exports.user_signup = (req, res) => {
    User.find({
            userEmail: req.body.userEmail
        })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                bcrypt.hash(req.body.password, null, null, (err, hash) => {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            pw: hash,
                            type: req.body.type,
                            age: req.body.age,
                            phone_num: req.body.phone_num,
                            points: req.body.points,
                            preference: req.body.preference,
                            address: req.body.address,
                            marketing: req.body.marketing,
                            gender: req.body.gender,
                            birthday: req.body.birthday
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                return res.status(201).json({
                                    message: "User created",
                                    result
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                return res.status(500).json(err);
                            });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.user_login = (req, res) => {
    User.find({
            userEmail: req.body.userEmail
        })
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "User doesn't exist"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "password error",
                        err
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email : user[0].email,
                        _id : user[0]._id
                    }, process.env.JWT_KEY, {
                        expiresIn: "30d"
                    });

                    return res.status(200).json({
                        message: "Login Successful",
                        token: token
                    });
                }
                return res.status(401).json({
                    message: "Login failed",
                    err
                });
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        });
};

exports.user_info = (req, res, next) => {
    User.find().where('email').equals(req.userData.email)
    .then(userInfo => {
        if(!userInfo){
            return res.status(404).json({message : "User Not Found"})
        }
        console.log(req.userData);
        return res.status(200).json(userInfo[0]);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err)
    })
}