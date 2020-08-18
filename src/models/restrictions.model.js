/** Imports mongoose */
const mongoose = require('mongoose');

/** Creates the userFav schema */
const restrictionSchema = new mongoose.Schema({
    continuous: Number,
    ahead: Number,
});


/** Creates the mongoose model for userFav */
const Restrictions = mongoose.model('Restrictions', restrictionSchema);

module.exports = Restrictions;
