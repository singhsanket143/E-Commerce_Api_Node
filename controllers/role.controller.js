const roleService = require('../services/role.service');

const serverError = {
    message: 'Something went wrong',
    data: {},
    err: 'Not able to perform the operation',
    success: false
}

const addRoleToUser = async (req, res) => {
    const response = await roleService.addRole(req.body.userId, req.body.roleId);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully added role to the user',
        data: response,
        success: true,
        err: {}
    })

}

const removeRoleFromUser = async (req, res) => {
    const response = await roleService.removeRole(req.body.userId, req.body.roleId);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully revoked role from a user',
        success: true,
        err: {},
        data: response
    })
}

module.exports = {
    addRoleToUser,
    removeRoleFromUser
}