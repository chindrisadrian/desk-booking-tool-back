/** Import Bookings model */
const Bookings = require('../models/bookings.model');

/**
 * gets restrictions
 * @param {*} info
 */
async function getBooking(info) {
    return await Bookings.findOne(info, function(err) {
        if (err) console.log('error trying to get booking');
    });
}

/**
 * get bookings
 * @param {*} info
 */
async function getBookings(info) {
    return await Bookings.find(info, function(err) {
        if (err) console.log('error trying to get bookings');
    });
}

/**
 * add new bookings
 * @param {*} info
 */
async function postBooking(info) {
    return await Bookings.create(info, function(err) {
        if (err) console.log(err);
    });
}

/**
 * delete bookings
 * @param {*} info
 */
async function deleteBooking(info) {
    return await Bookings.deleteOne(info, function(err) {
        if (err) console.log(err);
    });
}

/**
 * delete all the bookings
 * @param {*} info
 */
async function deleteBookings(info) {
    return await Bookings.deleteMany(info, function(err) {
        if (err) console.log(err);
    });
}

module.exports = {
    getBooking,
    getBookings,
    postBooking,
    deleteBooking,
    deleteBookings,
};
