/** Import restrictions Model */
const Restrictions = require('../models/restrictions.model');

/**
 * get restrictions
 */
async function getRestrictions() {
    return await Restrictions.find({});
}

/**
 * does thing
 * @param {*} body ..
 */
async function postRestrictions(body) {
    const newData = {
        continuous: body.continuous,
        ahead: body.ahead,
    };

    // return await Restrictions.findOneAndDelete({'ahead': 4});
    Restrictions.findOneAndUpdate(
        {},
        newData,
        {upsert: true, useFindAndModify: false},
        function(err, doc) {
            if (err) console.log('error trying to update restriction');
        },
    );
}

module.exports = {
    getRestrictions,
    postRestrictions,
};
