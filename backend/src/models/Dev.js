const mongoose = require('mongoose')

const DevSchema = new mongoose.Schema({
    name: String,
    user_github: String,
    bio: String,
    avatar_url: String,
    tecno: [String],

})


module.exports = mongoose.model('Dev', DevSchema)