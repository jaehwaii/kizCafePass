const mongoose = require('mongoose');
const Partner = require('../model/partner');

exports.home_create = (req, res) => {
    const partner = new Partner({
        name : req.body.name,
        thumbnail : req.body.thumbnail,
        address : req.body.address,
        address_city: req.body.address_city,
        address_region: req.body.address_region,
        category : req.body.category,
        recommand : req.body.recommand,
        manager_name : req.body.manager_name,
        info_general : req.body.info_general,
        business_hour : req.body.business_hour,
        closed_days: req.body.closed_days,
        phone_num: req.body.phone_num,
        register_date: req.body.register_date
    });
    partner.save()
    .then((result) => {
        return res.status(201).json({
            message : "Event Created",
            result
        })
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
    
};

exports.home_newList = (req,res) => {
    Partner.find().where('recommand').equals("N")
    .then((result) => {
        if (!result){
            return res.status(404).json({message: "not found"});
        }
        else{
            return res.status(200).json(result);
        }
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
    
};

exports.home_hotList = (req,res) => {
    Partner.find().where('recommand').equals("H")
    .then((result) => {
        if (!result){
            return res.status(404).json({message: "not found"});
        }
        else{
            return res.status(200).json(result);
        }
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
    
};

exports.home_recommandList = (req,res) => {
    Partner.find().where('recommand').equals("R")
    .then((result) => {
        if (!result){
            return res.status(404).json({message: "not found"});
        }
        else{
            return res.status(200).json(result);
        }
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
    
};