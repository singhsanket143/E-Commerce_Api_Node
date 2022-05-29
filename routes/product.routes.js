const productController = require('../controllers/product.controller');
const productValidator = require('../middlewares/product.validator');
const authValidator = require('../middlewares/auth.validator');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/products',
        authValidator.isAuthenticated,
        authValidator.isAdminOrSeller,
        productValidator.productCreateValidator,
        productController.createProduct
    )

    app.get(
        '/ecom/api/v1/products',
        productController.getAllProducts
    )

    app.get(
        '/ecom/api/v1/products/:id',
        productController.getProductById
    )

    app.put(
        '/ecom/api/v1/products/:id',
        authValidator.isAuthenticated,
        authValidator.isAdminOrSeller,
        productValidator.productUpdateValidator,
        productController.updateProduct
    )

    app.patch(
        '/ecom/api/v1/products/:id',
        authValidator.isAuthenticated,
        authValidator.isAdminOrSeller,
        productValidator.productPatchValidator,
        productController.updateProduct
    )

    app.delete(
        '/ecom/api/v1/products/:id',
        authValidator.isAuthenticated,
        authValidator.isAdminOrSeller,
        productController.deleteProduct
    )
}

module.exports = routes;