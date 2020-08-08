const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    priceList: {
        type: [
            {
                price: {
                    type : Number
                },
                unit: {
                    type : String
                }
            }
        ]
    },
    discount: {
        type : Number
    },
    inStock: {
        type: Boolean,
    },
    description: {
        type: String
    }
})