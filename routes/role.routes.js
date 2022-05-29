const roleController = require('../controllers/role.controller');
const authValidator = require('../middlewares/auth.validator');
const routes = (app) => {
    app.post(
        '/ecom/api/v1/role',
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        roleController.addRoleToUser
    )

    app.delete(
        '/ecom/api/v1/role',
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        roleController.removeRoleFromUser
    )
}

module.exports = routes;