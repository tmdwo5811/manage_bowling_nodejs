const userController = require('./controllers/user.controller');

module.exports = (router) => {

    router.route("/hello")
    .get(userController.hello);

    router.route("/hello2")
    .get(userController.hello);

    router.route("/create/message")
    .get(userController.createMessage);

    router.route("/get/user/info")
    .get(userController.getUserInfo);

    return router;
}