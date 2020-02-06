const { Router } = require('express')
const DevController = require('./controller/DevController')

const routes = Router()


//get, post, put, delete

//Query Params: request.query
//Route Params: request.params
//Body: reques.body

//MongoDB (não relacional)

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)


module.exports = routes