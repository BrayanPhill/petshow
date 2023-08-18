module.exports = app => {

    const  router = require('express').Router()

    const AppController = require('../controllers/app.controller')
    const PetController = require('../controllers/pet.controller')

    router.get('/', AppController.hello)
    router.get('/pet', PetController.listaTodosPets)
    router.get('/pet/:id', PetController.listaUmPet)
    router.post('/pet', PetController.cadastroMeuPet)
    router.put('/pet/:id', PetController.atualizaPets)
    router.delete('/pet/:id', PetController.apagaPet)

    app.use('/', router)
}



