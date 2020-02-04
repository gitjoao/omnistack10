const { Router } = require('express')
const axios = require('axios')

const routes = Router()


//get, post, put, delete

//Query Params: request.query
//Route Params: request.params
//Body: reques.body

//MongoDB (não relacional)

routes.post('/devs', async (request, response) => {
    const { user_github } = request.body 

    const result = await axios.get(`https://api.github.com/users/${user_github}`)
    const { id,name } = result.data
    console.log( id, name )
    return response.json({message: "Leu porque é gay."})
})


module.exports = routes