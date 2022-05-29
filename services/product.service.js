const {Product} = require('../models/index');
const { Op } = require('sequelize');

const create = async (data) => {
    try {
        const product = await Product.create(data);
        return product;
    } catch (err) {
        console.log(err);
    }
}

const getAll = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (err) {
        console.log(err);
    }
}

const findByName = async (name) => {
    try {
        const products = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `${name}%`
                }
            }
        });
        return products;
    } catch (err) { 
        console.log(err);
    }
}

const findById = async (productId) => {
    try {
        const product = await Product.findByPk(productId);
        if(!product) return {};
        return product;
    } catch (err) {
        console.log(err);
    }
}

const update = async (data, productId) => {
    try {
        const product = await Product.findByPk(productId);
        if(!product) {
            console.log("not able to find the product");
            return {};
        }
        await product.update(data);
        return product;
    } catch (err) {
        console.log(err);
    }
}

const destroy = async (productId) => {
    try {
        const product = await Product.findByPk(productId);
        await product.destroy();
        return true;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    getAll,
    findByName,
    findById,
    update,
    destroy
}