let mongoose = require('mongoose');

let urlSechma = new mongoose.Schema({
    original_url: {
        type: String,
        requied: true
    },
    short_url: {
        type: Number,
        default: 0,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('ShortnedURl', urlSechma);

