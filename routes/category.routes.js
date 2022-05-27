const categoryController = require('../controllers/category.controller');

const routes = (app) => {
    app.post('/ecom/api/v1/category', categoryController.createCategory);
}

module.exports = routes;