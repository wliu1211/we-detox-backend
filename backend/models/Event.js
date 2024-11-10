const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating : Number,
    description: String
})

const EventSchema = new mongoose.Schema({
    name : String,
    userId: String,
    location : String,
    duration: Number,
    description: String,
    speakers: [String],
    tags: [String],
    attendees: Number,
    reviews: [ReviewSchema],
    coordinates: String,
    completed: Boolean
})

module.exports = mongoose.model('Event', EventSchema);