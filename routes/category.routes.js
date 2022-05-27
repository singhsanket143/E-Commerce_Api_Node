const categoryController = require('../controllers/category.controller');
const categoryValidator = require('../middlewares/category.validator');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/category', 
        categoryValidator.validateCreate,
        categoryController.createCategory
    );

    app.get(
        '/ecom/api/v1/category', 
        categoryController.getAllCategories
    );

    app.get(
        '/ecom/api/v1/category/:id',
        categoryValidator.validateGetById,
        categoryController.getCategoryById
    )
}

module.exports = routes;