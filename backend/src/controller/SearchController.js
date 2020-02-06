const Dev = require('../models/Dev')
const parseStringToArray = require('../utils/parseStringToArray')

module.exports = {

     async index ( request, response) {
        const {latitude, longitude, tecno} = request.query

        const tecnoArray = parseStringToArray(tecno)
        const devs = await Dev.find({
            tecno: {
                $in: tecnoArray
            },
            location: {
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })
        return response.json({ devs })

     }
}