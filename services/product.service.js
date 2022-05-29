const {Product, Category} = require('../models/index');
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
        const products = await Product.findAll({include: Category});
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
            },
            include: Category
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

const createFilter = (data) => {
    let filter = {};
    if(data.minPrice && data.maxPrice) {
        Object.assign(filter, {[Op.gte]: data.minPrice});
        Object.assign(filter, {[Op.lte]: data.maxPrice});
    } else if (data.minPrice) {
        Object.assign(filter, {[Op.gte]: data.minPrice});
    } else if (data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
    }
    return filter;
}

const filteredProducts = async (data) => {
    let products;
    if(!data.categoryId && !data.minPrice && !data.maxPrice) {
        products = await Product.findAll();
        return products;
    }
    let filter = createFilter(data);
    if(!data.categoryId) {
        products = await Product.findAll({
            where: {
                cost: filter
            }
        });
        return products;
    }
    let costAndCategoryFilter;
    if(data.minPrice || data.maxPrice) {
        costAndCategoryFilter = {
            cost: filter,
            categoryId: data.categoryId
        }
    } else {
        costAndCategoryFilter = {
            categoryId: data.categoryId
        }
    }
    console.log(costAndCategoryFilter)
    products = await Product.findAll({
        where: costAndCategoryFilter
    });
    return products
}

module.exports = {
    create,
    getAll,
    findByName,
    findById,
    update,
    destroy,
    filteredProducts
}