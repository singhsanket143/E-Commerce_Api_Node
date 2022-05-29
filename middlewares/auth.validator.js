const authService = require('../services/auth.services');

const validateSignup = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Invalid arguments',
            success: false,
            data: {},
            err: 'Email or password missing'
        });
    }
    next();
}

const validateSignin = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            essage: 'Invalid arguments',
            success: false,
            data: {},
            err: 'Email or password missing'
        })
    }
    next();
}

const isAuthenticated = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if(!token) {
        return res.status(401).json({
            message: 'JWT token missing',
            success: false,
            data: {},
            err: 'Invalid or missing arguments inrequest'
        })
    }
    const response = authService.verifyToken(token);
    if(!response) {
        return res.status(401).json({
            message: 'JWT not verified',
            success: false,
            data: {},
            err: 'Invalid auth details'
        })
    }
    const user = await authService.getUserById(response.id);
    if(!user) {
        return res.status(404).json({
            message: 'JWT for an invalid user sent',
            success: false,
            data: {},
            err: 'Invalid credentials'
        })
    }
    req.user = user.id; // we are going to save req.user as the authenticated user's id
    next();
}

module.exports = {
    validateSignup,
    validateSignin,
    isAuthenticated
}