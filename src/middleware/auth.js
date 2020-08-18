// This authentication middleware could use modules like passport or JWT
// and is provided just as an exmaple.

// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

/**
  * Defining the authorization middleware module.
  * @param {any} req
  * @param {any} res
  * @param {any} next
  */
const auth = async(req, res, next) => {
    // The following commented out code is an example of using JWT for authentication
    // and is only provided as an example.

    // try {
    //     const token = req.header('Authorization').replace('Bearer ', '');
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    //     if (!user) {
    //         throw new Error()
    //     }
    //     req.token = token;
    //     req.user = user;
    next();
    // } catch (e) {
    //     res.status(401).send({ error: 'Please authenticate.' });
    // }
};

module.exports = auth;

