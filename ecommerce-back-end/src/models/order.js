const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requires: true
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAddress.address',
        required: true
    },
    totalAmount: {
        type: Number,
        requires: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            payablePrice: {
                type: Number,
                required: true
            },
            purchasedQty: {
                type: Number,
                required: true
            },
        }
    ],
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'cancelled', 'refund'],
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Order', orderSchema);