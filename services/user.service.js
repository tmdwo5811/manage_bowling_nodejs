const userRepository = require('../repositories/user.repository');

exports.hello = async (message) => {
    try {
        const query = {text: message}
        await userRepository.create(query);
    } catch (e) {
        console.log(e);
        throw e;
    }
}