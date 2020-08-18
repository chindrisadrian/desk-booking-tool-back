/** Express helps with http requests. */
const express = require('express');

/** Logger to log all the errors and infos */
  

/** Utilize the auth middleware modules. */
const auth = require('../middleware/auth');

/**  Import express router to have multi-page applications. */
const router = new express.Router();

/** Import service for restriction */
const service = require('../services/restrictions_service');

/** Hello world endpoint to serve as an example. */
router.get('/restrictions', auth, async(req, res, next) => {
    try {
        res.json(await service.getRestrictions(req.body));
    } catch (err) {
        logger.error('Error at restriction Get');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.post('/restrictions', auth, async(req, res, next) => {
    try {
        res.json(await service.postRestrictions(req.body));
    } catch (err) {
        logger.error('Error at restriction Post');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

module.exports = router;
