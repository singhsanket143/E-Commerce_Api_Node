const {Category} = require('../models/index');

const create = async (data) => {
    try {
        const category = await Category.create({
            name: data.name,
            description: data.description
        });
        return category;
    } catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
}

const getAll = async () => {
    try {
        const categories = await Category.findAll();
        return categories;
    } catch (err) {
        console.log(err);
    }
}

const getById = async (categoryId) => {
    try {
        // const category = await Category.findOne({
        //     where: {
        //         id: categoryId
        //     }
        // })
        const category = await Category.findByPk(categoryId);
        return category;
    } catch (err) {
        console.log(err);
    }
}

const getByName = async (categoryName) => {
    try {
        const category = await Category.findOne({
            where: {
                name: categoryName
            }
        });
        console.log(category);
        return category;
    } catch (err) {
        console.log(err);
    }
}

const update = async (data, categoryId) => {
    try {
        const category = await Category.findByPk(categoryId);
        if(!category) {
            console.log("Not able to find category");
            return {};
        }
        await category.update(data);
        return category;
    } catch (err) {
        console.log(err);
    }
}

const destroy = async (categoryid) => {
    try {
        const category = await Category.findByPk(categoryid);
        await category.destroy();
        return true;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    getAll,
    getById,
    getByName,
    update,
    destroy
}