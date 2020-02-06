const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringToArray = require('../utils/parseStringToArray')

module.exports = {

    async index (request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store (request, response) {
    const { user_github, tecno, latitude, longitude } = request.body

    let dev = await Dev.findOne({ user_github })

        if (!dev){

            const result = await axios.get(`https://api.github.com/users/${user_github}`)
        
            const { name = login, avatar_url, bio } = result.data
        
            const tecnoArray = parseStringToArray(tecno)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
             dev = await Dev.create({
                user_github,
                name,
                avatar_url,
                avatar_url,
                bio,
                tecno: tecnoArray,
                location
            })
        }

    return response.json(dev)
    }
}