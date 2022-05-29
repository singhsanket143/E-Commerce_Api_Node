const user = require('../models/user');
const authService = require('../services/auth.services');
const roleService = require('../services/role.service');

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

const checkAdmin = async (req, res, next) => {
    const user = await authService.getUserById(req.user);
    const role = await roleService.getRole(1);
    const isAdmin = await user.hasRole(role)
    if(!isAdmin) {
        return res.status(401).json({
            message: 'User not an admin',
            err: 'Not authorized',
            data: {},
            success: false
        })
    }
    next();
}

const checkSeller = async (req, res, next) => {
    const user = await authService.getUserById(req.user);
    const role = await authService.getRole(2);
    const isSeller = await user.hasRole(role);
    if(!isSeller) {
        return res.status(401).json({
            message: 'User not a seller',
            err: 'not authorized',
            data: {},
            success: false
        })
    }
    next();
}

const isAdminOrSeller = async (req, res, next) => {
    const user = await authService.getUserById(req.user);
    const admin = await roleService.getRole(1);
    const seller = await roleService.getRole(2);
    if(!(user.hasRole(admin) || user.hasRole(seller))) {
        return res.status(401).json({
            message: 'Action only available to a valid admin or seller',
            err: 'Not authorized',
            data: {},
            success: false
        });
    }
    next();
}

module.exports = {
    validateSignup,
    validateSignin,
    isAuthenticated,
    checkAdmin,
    checkSeller,
    isAdminOrSeller
}