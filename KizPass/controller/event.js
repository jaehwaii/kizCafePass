const mongoose = require('mongoose');

const Event = require('../model/event');


exports.event_create = (req, res) => {
    const event = new Event({
        _id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        thumbnail : req.body.thumbnail,
        ongoing : req.body.ongoing,
        contents : req.body.contents,
        end_date : req.body.end_date
    });
    event.save()
    .then(result => {
        console.log(result);
        return res.status(201).json({
            message : "Event Created",
            result
        })
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err)
    })
};

exports.evnet_progressList = (req, res) => {
    Event.find().where('ongoing').equals('true')
    .sort({_id : -1})
    .then(result =>{
        if(!result){
            return res.status(404).json({message : "Event Not Found"})
        }
        return res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err)
    })
};

exports.event_finishList = (req, res) => {
    Event.find().where('ongoing').equals('false')
    .sort({_id : -1})
    .then(result =>{
        if(!result){
            return res.status(404).json({message : "Event Not Found"})
        }
        return res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err)
    })
};
