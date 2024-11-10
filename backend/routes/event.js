const express = require('express');
const router = express.Router();

const {
    getEvents,
    findEvent,
    findEventByUserId,
    addEvent,
    addEventRatings,
    deleteEvent
} = require('../controllers/event');

router.route('/')
    .get(getEvents)
    .post(addEvent);

router.route('/findEvent/:id')
    .get(findEventByUserId);

router.route('/add-event-rating/:id')
    .put(addEventRatings);

router.route('/:id')
    .get(findEvent)
    .delete(deleteEvent);

module.exports = router;