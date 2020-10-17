const userService = require('../services/user.service');

exports.hello = async (req, res, next) => {
    try {
        
    } catch (e) {
        console.log(e);
        next(e);
    }
}