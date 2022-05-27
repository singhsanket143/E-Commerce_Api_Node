const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const response = await categoryService.create(req.body);
    if(!response) {
        return res.status(500).json({
            message: 'Something went wrong, not able to create category',
            success: false,
            data: {},
            err: 'Not able to create category'
        });
    }
    return res.status(201).json({
        message: 'Successfully created the category',
        success: true,
        data: response,
        err: {}
    });
}

module.exports = {
    createCategory
}