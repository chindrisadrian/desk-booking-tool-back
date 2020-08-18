/** Imports mongoose */
const mongoose = require('mongoose');

/** Creates the userFav schema */
const floorSchema = new mongoose.Schema({
    office: String,
    floor: String,
    width: Number,
    height: Number,
    desks: Array,
    image: {data: Buffer, contentType: String},
});

/** create model */
const Floors = mongoose.model('Floors', floorSchema);

module.exports = Floors;
