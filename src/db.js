require('dotenv').config();
/** Configure winston logger */
  

/** mongoose for database */
const mongoose = require('mongoose');

/** uri for connection */
const uri =
  process.env.APP_ENV === 'devlocal'
    ? 'mongodb://' +
      process.env.MONGOHOST +
      ':' +
      process.env.MONGOPORT +
      '/' +
      process.env.MONGODB
    : 'mongodb://' +
      process.env.MONGOUSER +
      ':' +
      process.env.MONGOPASSWORD +
      '@' +
      process.env.MONGOHOST +
      ':' +
      process.env.MONGOPORT +
      '/' +
      process.env.MONGODB +
      '?ssl=true';

/**
 * connects to mongoose
 * @return {string}
 */
function connect() {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

/**
 * Checkes the connection
 */
function checkConnection() {
  const connection = mongoose.connection;
  connection.once('open', () => {
    logger.info('MongoDB database connection established successfully!');
  });
}

/**
 * diconnects
 * @return {string}
 * */
function disconnect() {
  return mongoose.disconnect();
}

module.exports = { mongoose, connect, checkConnection, disconnect };
