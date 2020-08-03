const mongoose = require('mongoose');

const UploadSchema = mongoose.Schema({
    fieldname: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    encoding: {
        type: String,
        required: true
    },
    mimeType: {
        type: String
    },
    destination: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number
    }

});

UploadSchema.methods = {
    view() {
        const view = {
            id: this.id,
            path: `/images/${this.filename}`
        }
        return view;
    }
}

module.exports = mongoose.model('Upload', UploadSchema);