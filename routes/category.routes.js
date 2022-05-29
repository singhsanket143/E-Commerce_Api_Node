const categoryController = require('../controllers/category.controller');
const categoryValidator = require('../middlewares/category.validator');
const authValidator = require('../middlewares/auth.validator');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/categories', 
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        categoryValidator.validateCreate,
        categoryController.createCategory
    );

    app.get(
        '/ecom/api/v1/categories', 
        categoryController.getAllCategories
    );

    app.get(
        '/ecom/api/v1/categories/:id',
        categoryValidator.validateGetById,
        categoryController.getCategoryById
    )

    app.put(
        '/ecom/api/v1/categories/:id',
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        categoryValidator.validateUpdate,
        categoryController.updateCategory
    )

    app.patch(
        '/ecom/api/v1/categories/:id',
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        categoryValidator.validatePartialUpdate,
        categoryController.updateCategory
    )

    app.delete(
        '/ecom/api/v1/categories/:id',
        authValidator.isAuthenticated,
        authValidator.checkAdmin,
        categoryController.deleteCategory
    )

    app.get(
        '/ecom/api/v1/categories/:id/products',
        categoryValidator.validatePaginator,
        categoryController.getproductsByCategory
    )
}

module.exports = routes;