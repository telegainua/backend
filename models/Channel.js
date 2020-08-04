const mongoose = require("mongoose");

const ChannelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userCount: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.ObjectId,
    ref: 'Upload'
  }
});

ChannelSchema.index({'title': 'text', 'description': 'text'});

module.exports = mongoose.model("Channel", ChannelSchema);
