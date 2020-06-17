const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cat_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);