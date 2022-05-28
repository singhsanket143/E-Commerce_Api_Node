const productController = require('../controllers/product.controller');
const productValidator = require('../middlewares/product.validator');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/products',
        productValidator.productCreateValidator,
        productController.createProduct
    )

    app.get(
        '/ecom/api/v1/products',
        productController.getAllProducts
    )
}

module.exports = routes;