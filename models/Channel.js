const mongoose = require('mongoose');

const ChannelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
      type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Channel', ChannelSchema);
