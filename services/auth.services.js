const {User} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

const getUserByEmail = async (userEmail) => {
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        return user;
    } catch (err) {
        console.log(err);
    }
}

const checkPassword = (userPassword, encryptedPassword) => {
    return bcrypt.compareSync(userPassword, encryptedPassword);
}

const createToken = (user) => {
    try {
        return jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: '2 days'
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signup,
    checkPassword,
    getUserByEmail,
    createToken
}