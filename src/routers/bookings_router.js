/** Express helps with http requests. */
const express = require('express');

/** Logger to log all the errors and infos */
  

/** Utilize the auth middleware modules. */
const auth = require('../middleware/auth');

/**  Import express router to have multi-page applications. */
const router = new express.Router();

/** Import booking serivce */
const service = require('../services/bookings_service');

router.get('/bookings', auth, async(req, res, next) => {
    try {
        res.json(await service.getBookings(req.query));
    } catch (err) {
        logger.error('Error getting bookings');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.get('/booking', auth, async(req, res, next) => {
    try {
        res.json(await service.getBooking(req.query));
    } catch (err) {
        logger.error('Error getting booking');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.post('/booking', auth, async(req, res, next) => {
    try {
        res.json(await service.postBooking(req.body));
    } catch (err) {
        logger.error('Error at post booking');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.delete('/booking', auth, async(req, res, next) => {
    try {
        res.json(await service.deleteBooking(req.body));
    } catch (err) {
        logger.error('Error at delete booking');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.delete('/bookings', auth, async(req, res, next) => {
    try {
        res.json(await service.deleteBookings(req.body));
    } catch (err) {
        logger.error('Error at delete booking');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

module.exports = router;
