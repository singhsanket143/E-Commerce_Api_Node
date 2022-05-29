const categoryController = require('../controllers/category.controller');
const categoryValidator = require('../middlewares/category.validator');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/categories', 
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
        categoryValidator.validateUpdate,
        categoryController.updateCategory
    )

    app.patch(
        '/ecom/api/v1/categories/:id',
        categoryValidator.validatePartialUpdate,
        categoryController.updateCategory
    )

    app.delete(
        '/ecom/api/v1/categories/:id',
        categoryController.deleteCategory
    )

    app.get(
        '/ecom/api/v1/categories/:id/products',
        categoryController.getproductsByCategory
    )
}

module.exports = routes;