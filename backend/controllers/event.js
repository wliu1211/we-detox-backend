const Event = require('../models/Event');



exports.addEvent = async (req, res, next) => {
    try {
        const event = await Event.create(req.body);
        res.status(200).json({success: true, event})
    } catch (error) {
        res.status(400).json({success: false, message: "Event created error"})
    }
}

exports.getEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.status(200).json({success: true, count: events.length, data: events});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get events"});
    }
}
exports.findEventByUserId = async (req, res, next) => {
    try {
        const event = await Event.findOne({"userId": req.params.id});
        if (!event) {
            return res.status(400).json({success: false, message: "Event userId not found"})
        }
        res.status(200).json({success: true, event})
    } catch (error) {
        res.status(400).json({success: false});
    }
}
exports.findEvent = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(400).json({success: false, message: "Event not found"});
        }
        res.status(200).json({success: true, event});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get event"});
    }
}


exports.addEventRatings = async (req, res, next) => {
    try {
        const event = await Event.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {comments: req.body}}
        )
        
        res.status(200).json({success: true, message: "event rating added successfully", event})
    } catch (error) {
        res.status(400).json({success: false});
        
    }
}

exports.deleteEvent = async (req, res, next) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, msg: "Event has been deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false});        
    }
}