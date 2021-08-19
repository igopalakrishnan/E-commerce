const cart = require('../models/cart');
const Order = require('../models/order');

exports.addOrder = (req, res) => {
    cart.deleteOne({ user: req.user._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error })
        if (result) {
            req.body.user = req.user._id;
            const order = new Order(req.body);
            order.save((error, order) => {
                if (error) return res.status(400).json({ error })
                if (order) {
                    res.status(201).json({ order })
                }
            })
        }
    })
}

exports.getOrders = (req, res) => {
    Order.find({ user: req.user._id })
        .select('_id paymentStatus items')
        .populate('items.productId', '_id name productPictures')
        .exec((error, order) => {
            if (error) return res.status(400).json({ error })
            if (order) {
                res.status(200).json({ order })
            }
        })
}