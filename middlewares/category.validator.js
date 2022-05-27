const validateCreate = (req, res, next) => {
    if(!req.body.name) {
        return res.status(400).json({
            message: 'Category name is missing, please try again by adding a category name',
            success: false,
            err: 'Parameters missing from the request body',
            data: {}
        });
    }
    next();
}

const validateGetById = (req, res, next) => {
    if(Number.isNaN(parseInt(req.params.id))) {
        return res.status(400).json({
            message: 'Invalid request params',
            success: false,
            err: 'Expecting a valid integer id for category',
            data: {}
        })
    }
    next();
}


module.exports = {
    validateCreate,
    validateGetById
}