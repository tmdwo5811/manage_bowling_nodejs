const userService = require('../services/user.service');

exports.hello = async (req, res, next) => {
    try {
        const text = 'hello';
        console.log(text)
        return res.send({result: text});
    } catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createMessage = async (req, res, next) => {
    try {
        const {message} = req.query;
        const result = await userService.hello(message);
        return res.send(result);
    } catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getUserInfo = async (req, res, next) => {
    try {
        const result = await userService.getUserInfo();
        return res.send(result);
    } catch (e) {
        console.log(e);
        next(e);
    }
}