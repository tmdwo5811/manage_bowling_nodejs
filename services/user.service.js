const userRepository = require('../repositories/user.repository');

exports.hello = async (message) => {
    try {
        const query = {name: message}
        const result = await userRepository.create(query);
        
        return result;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

exports.getUserInfo = async () => {
    try {
        const query = {};
        const result = await userRepository.paginate(query);
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
}