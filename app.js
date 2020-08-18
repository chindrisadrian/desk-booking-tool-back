require('dotenv').config();

/** Express helps with http requests. */
const express = require('express');


/** Obtaining the router to be used as the middleware by express app. */
const port = process.env.PORT || 3000;

/** Allows the use of express funcitons. */
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
// Local imports.
const restrictionsRouter = require('./src/routers/restrictions_router');
const bookingsRouter = require('./src/routers/bookings_router');
const floorsRouter = require('./src/routers/floors_router');
const feedbackRouter = require('./src/routers/feedback_router');
const DB = require('./src/db');

/** Middleware. */
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(restrictionsRouter, bookingsRouter, floorsRouter, feedbackRouter);

/** Runs the server to listen on a specific port number from HTTP requests. */
logger.info('Starting server..');
app.listen(port, () => {
  logger.info(`server running on port ${port}`);
});

/** connect to mongoose. */
try {
  DB.connect();
  DB.checkConnection();
} catch (err) {
  logger.error(err);
}
