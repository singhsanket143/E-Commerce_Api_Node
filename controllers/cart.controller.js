const cartService = require('../services/cart.service');

const STATUS = {
    CREATION: 'creation',
    PLACED: 'placed',
    CANCELLED:' cancelled',
    DELIVERED: 'delivered'
}

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {},
    err: 'Not able to do the operation'
}

const addToCart = async (req, res) => {
    let cart = await cartService.getCartByUser(req.user, STATUS.CREATION);
    if(!cart) {
        cart = await cartService.createCart(req.user);
    }
    const response = await cartService.addProductToCart({
        productId: req.body.productId,
        cartId: cart.id
    });
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully added product to cart',
        success: true,
        err: {},
        data: response
    })
}

module.exports = {
    addToCart
}