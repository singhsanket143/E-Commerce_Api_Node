const productCreateValidator = (req, res, next) => {
    if(!req.body.name || !req.body.cost || !req.body.categoryId) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: false,
            data: {},
            err: 'Either name or cost or category is missing from the request object'
        })
    }
    next();
}

const productUpdateValidator = (req, res, next) => {
    if(!req.body.name || !req.body.description || !req.body.cost) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: false,
            data: {},
            err: 'Either name, description or cost is missing from the request object'
        })
    }
    next();
}

const productPatchValidator = (req, res, next) => {
    if(!(req.body.name || req.body.cost || req.body.description)) {
        return res.status(400).json({
            message: 'In valid request body',
            success: false,
            data: {},
            err: 'Atleast one parameter among cost, name and description is exepcted'
        })
    }
    next();
}

module.exports = {
    productCreateValidator,
    productUpdateValidator,
    productPatchValidator
}