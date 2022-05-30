const {Cart, Product} = require('../models/index');

const addProductToCart = async (data) => {
    try {
        const cart = await Cart.findByPk(data.cartId);
        if(!cart.status == 'creation') {
            return {
                error: 'Order cannot be modified now'
            }
        }
        const product = await Product.findByPk(data.productId);
        if(!product) {
            return {
                error: 'No such product found'
            }
        }
        cart.addProduct(product, {through : {quantity: 1}});
        return cart;
    } catch (err) {
        console.log(err);
    }
}

const getCartByUser = async (uid, cartStatus) => {
    try {
        const cart = await Cart.findOne({
            where: {
                userId: uid,
                status: cartStatus
            }
        });
        return cart;
    } catch (err) {
        console.log(err);
    }
}

const createCart = async (uid) => {
    console.log(uid);
    try {
        const cart = await Cart.create({userId: uid});
        return cart;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addProductToCart,
    getCartByUser,
    createCart
}