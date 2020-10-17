const userController = rquire('./controllers/user.controller');

module.exports = (router) => {
    router.route("/hello")
    .get(userController.hello);


    
    return router;
}