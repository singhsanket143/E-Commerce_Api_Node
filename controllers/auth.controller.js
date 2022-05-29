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

const signin = async (req, res) => {
    const user = await authService.getUserByEmail(req.body.email);
    if(!user) {
        return res.status(404).json({
            message: 'Email not found',
            data: {},
            success: false,
            err: 'Invalid credentials'
        })
    }
    if(!authService.checkPassword(req.body.password, user.password)) {
        console.log("Incorrect password");
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Incorrect password',
            err: 'Invalid credentials'
        })
    }
    const token = authService.createToken({id: user.id, email: user.email});
    if(!token) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully logged in',
        success: true,
        data: token,
        err: {}
    })
}

module.exports = {
    signup,
    signin
}