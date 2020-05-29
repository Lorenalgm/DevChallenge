const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    email: String,
}, {
	timestamps: true,
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);