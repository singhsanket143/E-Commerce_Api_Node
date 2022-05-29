const {User} = require('../models/index');

const signup = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (err) {
        console.log(err.name, err.message);
        if(err.name == 'SequelizeValidationError') {
            return {
                error: err.message
            }
        }
    }
}

module.exports = {
    signup
}