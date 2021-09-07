const mongoose = require('mongoose')

const feedModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    postImg: {
        type: String,
        required: true
    },
    isFollow: {
        type: Boolean,
        required: false,
        default: false
    },
    isLiked: {
        type: Boolean,
        required: false,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [],
        required: true
    },
    time: {
        type: String,
        required: true
    },
    totalLikes: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Feed', feedModel)