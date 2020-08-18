/** Express helps with http requests. */
const express = require('express');

/** Logger to log all the errors and infos */
  

/** Utilize the auth middleware modules. */
const auth = require('../middleware/auth');

/**  Import express router to have multi-page applications. */
const router = new express.Router();

/** Import booking serivce */
const service = require('../services/feedback_service');

router.post('/feedback', auth, async (req, res, next) => {
  try {
    res.json(await service.postFeedback(req.body));
  } catch (err) {
    logger.error('Error posting fedback');
    logger.error(err);
    res.json({ error: err });
  }
  next();
});

module.exports = router;
