/** Imports mongoose */
const mongoose = require('mongoose');

/** Creates the userFav schema */
const bookingSchema = new mongoose.Schema({
    office: String,
    floor: String,
    date: Date,
    desk: String,
    name: String,
    email: String,
});

/** Creates the mongoose model for userFav */
const Bookings = mongoose.model('Bookings', bookingSchema);

module.exports = Bookings;
