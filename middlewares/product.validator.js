const productCreateValidator = (req, res, next) => {
    if(!req.body.name || !req.body.cost) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: true,
            data: {},
            err: 'Either name or cost is missing from the request object'
        })
    }
    next();
}

module.exports = {
    productCreateValidator
}