const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    position: String,
    bio: String,
    linkedin: String,
    github: String,
    avatar: String,
}, {
	timestamps: true,
});

module.exports = mongoose.model('Dev', DevSchema);