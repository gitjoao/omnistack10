const { Router } = require('express')
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

const routes = Router()


//get, post, put, delete

//Query Params: request.query
//Route Params: request.params
//Body: reques.body

//MongoDB (não relacional)

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)

routes.get('/search', SearchController.index)


module.exports = routes