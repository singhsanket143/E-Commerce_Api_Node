const cartController = require('../controllers/cart.controller');
const authValidator = require('../middlewares/auth.validator');
const routes = (app) => {
    app.post(
        '/ecom/api/v1/addToCart',
        authValidator.isAuthenticated,
        cartController.addToCart
    )
}

module.exports = routes;