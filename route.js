const userController = require('./controllers/user.controller');

module.exports = (router) => {
    router.route("/hello")
    .get(userController.hello);

    router.route("/get/user/info")
    .get(userController.getUserInfo);

    return router;
}