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

const getAllProducts = async (req, res) => {
    let response;
    if(!req.query.name)
        response = await productService.getAll();
    else
        response = await productService.findByName(req.query.name);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully fetched the products',
        success: true,
        data: response,
        err: {}
    });
}

module.exports = {
    createProduct,
    getAllProducts
}
