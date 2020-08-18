/** Express helps with http requests. */
const express = require('express');

/** Logger to log all the errors and infos */
  

/** Utilize the auth middleware modules. */
const auth = require('../middleware/auth');

/**  Import express router to have multi-page applications. */
const router = new express.Router();

/** Imports for image handleing */
const multer = require('multer');
/** Import Mutler for handleing form data */
const upload = multer({dest: 'uploads/'});
/** Import floor service  */
const service = require('../services/floors_service');

router.get('/floors', auth, async(req, res, next) => {
    try {
        res.json(await service.getFloors(req.query));
    } catch (err) {
        logger.error('Error fetching floors');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.post('/floors', upload.single('image'), async(req, res, next) => {
    try {
        res.json(await service.postFloor(req.body, req.file));
    } catch (err) {
        logger.error('Error creating floor');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.post(
    '/floorsFrontend',
    upload.single('image'),
    async(req, res, next) => {
        try {
            res.json(await service.postFloorFrontend(req.body, req.file));
        } catch (err) {
            logger.error('Error creating floor');
            logger.error(err);
            res.json({error: err});
        }
        next();
    },
);

router.put('/floors', auth, async(req, res, next) => {
    try {
        res.json(await service.updateDesk(req.body));
    } catch (err) {
        logger.error('Error updating desk');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

router.delete('/floors', auth, async(req, res, next) => {
    try {
        res.json(await service.deleteFloor(req.body));
    } catch (err) {
        logger.error('Error updating desk');
        logger.error(err);
        res.json({error: err});
    }
    next();
});

module.exports = router;
