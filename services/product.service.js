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

module.exports = {
    create,
    getAll,
    findByName,
    findById
}