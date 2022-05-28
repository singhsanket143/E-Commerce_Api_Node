const productService = require('../services/product.service');

const serverError = {
    message: 'Something went wrong',
    data: {},
    err: 'Not able to perform the operation on product',
    success: false
}

const createProduct = async (req, res) => {
    const response = await productService.create(req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(201).json({
        message: 'Successfully added the product',
        success: true,
        data: response,
        err: {}
    });
}

module.exports = {
    createProduct
}