const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')
const DevSchema = new mongoose.Schema({
    name: String,
    user_github: String,
    bio: String,
    avatar_url: String,
    tecno: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }

})


module.exports = mongoose.model('Dev', DevSchema)