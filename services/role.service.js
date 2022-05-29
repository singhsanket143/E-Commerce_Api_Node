const {Role, User} = require('../models/index');

const addRole = async (userId, roleId) => {
    try {
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);
        console.log(userId, role);
        user.addRole(role);
        return true;
    } catch (err) {
        console.log(err);
    }
}

const removeRole = async (userId, roleId) => {
    try {
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);
        user.removeRole(role);
        return true;
    } catch (err) {
        console.log(err);
    }
}

const getRole = async (roleId) => {
    try {
        const role = await Role.findByPk(roleId);
        return role;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addRole,
    removeRole,
    getRole
}