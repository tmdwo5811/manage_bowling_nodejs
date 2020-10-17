const userModel = require('../models/user.model');

exports.create = async (query) => {
    try {
        const result = await userModel.create([query]);
        return result;
    } catch (e) {
        console.log(e);
        throw e;
    }
}