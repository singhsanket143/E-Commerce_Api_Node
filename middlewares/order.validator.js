const {Cart} = require('../models/index');
const authService = require('../services/auth.services');
const roleService = require('../services/role.service');

const validateStatusUpdate = async (req, res, next) => {
    const user = await authService.getUserById(req.user);
    const role = await roleService.getRole(1);
    const isAdmin = await user.hasRole(role);
    const cart = await Cart.findByPk(req.params.id);

    if(!isAdmin && cart.userId != req.user) {
        return res.status(401).json({
            message: 'Cannot update order',
            err: 'Not authorized',
            data: {},
            success: false
        })
    }
    next();
}

module.exports = {
    validateStatusUpdate
}