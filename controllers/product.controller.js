const productService = require('../services/product.service');
const _ = require('lodash');
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
    if(_.isEmpty(response) && !_.isUndefined(response)) {
        serverError.err = 'No product found by the given name';
        return res.status(404).json(serverError);
    }
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

const getProductById = async (req, res) => {
    const response = await productService.findById(req.params.id);
    if(_.isEmpty(response) && !_.isUndefined(response)) {
        serverError.err = 'No product found by the given id';
        return res.status(404).json(serverError);
    }
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully fetched the product by id',
        success: true,
        data: response,
        err: {}
    });
}

const updateProduct = async (req, res) => {
    const response = await productService.update(req.body, req.params.id);
    if(_.isEmpty(response) && !_.isUndefined(response)) {
        serverError.err = 'No product found by the given id';
        return res.status(404).json(serverError);
    }
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully updated the product',
        success: true,
        data: response,
        err: {}
    });

}

const deleteProduct = async (req, res) => {
    const response = await productService.destroy(req.params.id);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully deleted the product',
        sucess: true,
        err: {},
        data: {}
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}
