const cartController = require('../controllers/cart.controller');
const authValidator = require('../middlewares/auth.validator');
const orderValidator = require('../middlewares/order.validator');
const routes = (app) => {
    app.post(
        '/ecom/api/v1/addToCart',
        authValidator.isAuthenticated,
        cartController.addToCart
    );

    app.post(
        '/ecom/api/v1/removeFromCart',
        authValidator.isAuthenticated,
        cartController.removeFromCart
    )

    app.patch(
        '/ecom/api/v1/cart/:id',
        authValidator.isAuthenticated,
        orderValidator.validateStatusUpdate,
        cartController.updateOrderStatus
    )
}

module.exports = routes;