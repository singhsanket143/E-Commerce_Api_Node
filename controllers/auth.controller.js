const authService = require('../services/auth.services');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {},
    err: 'Operation not successful'
}

const signup = async (req, res) => {
    const response = await authService.signup(req.body);
    if(response.error) {
        return res.status(400).json({
            message: response.error,
            success: false,
            data: {},
            err: 'Invalid credentials'
        })
    }
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully signed up',
        success: true,
        data: response,
        err: {}
    })
}

module.exports = {
    signup
}