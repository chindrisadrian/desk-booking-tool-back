/** Import floor model */
const Floors = require('../models/floors.model');
/** Import FS for reading file streams */
const fs = require('fs');

/**
 * gets floors: will always return array so get floor with [0] when querying one
 * @param {*} info params for floor
 */
async function getFloors(info) {
    return await Floors.find(info, function(err) {
        if (err) console.log('error trying to get floor');
    });
}

/**
 * posts floorplans from the frontend
 * @param {*} info contains the floor name, office name, width, and height of the view when buildingthe floor
 * @param {*} file for the image
 * This receives JS FormData from the frontend to handle the image file, so all arrays need to be parsed before
 *   making mongo call
 */
async function postFloorFrontend(info, file) {
    const d = JSON.parse(info.desks);
    const data = {
        floor: info.floor,
        office: info.office,
        height: info.height,
        width: info.width,
        desks: d,
        image: {data: fs.readFileSync(file.path), contentType: 'image/jpeg'},
    };
    return await Floors.create(data, function(err) {
        if (err) console.log('error trying to create floor');
    });
}

/**
 * posts floor
 * @param {*} info
 * @param {*} file for the image
 * This is for posting a floor through Postman/directly through the API so nothing needs to be parsed
 */
async function postFloor(info, file) {
    const data = {
        ...info,
        image: {data: fs.readFileSync(file.path), contentType: 'image/jpeg'},
    };
    return await Floors.create(data, function(err) {
        if (err) console.log('error trying to create floor');
    });
}

/**
 * update a desk's bookable status
 * @param {*} info
 */
async function updateDesk(info) {
    const query = {
        'office': info.office,
        'floor': info.floor,
        'desks.name': info.desk,
    };
    const newValues = {
        name: info.desk,
        bookable: info.bookable,
        x: info.x,
        y: info.y,
    };
    return await Floors.updateOne(
        query,
        {
            $set: {
                'desks.$': newValues,
            },
        },
        function(err) {
            if (err) console.log('error trying to get booking');
        },
    );
}

/**
 * delete a floor with given params: empty object will clear the DB
 * @param {*} info
 */
async function deleteFloor(info) {
    return await Floors.deleteMany(info, function(err) {
        if (err) console.log('error trying to delete floor');
    });
}

module.exports = {
    getFloors,
    postFloor,
    updateDesk,
    deleteFloor,
    postFloorFrontend,
};
