const express = require('express')
const clientSchema = require('../models/client_model')
const route = express.Router()

//User creation
route.post('/new-client', (req, res) => {
    const user = clientSchema(req.body)
    user.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Show users
route.get('/clients', (req, res) => {
    clientSchema.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Show user info
route.get('/find-client/:id', (req, res) => {
    const {id} = req.params
    clientSchema.findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Delete user
route.delete('/delete-client/:id', (req, res) => {
    const {id} = req.params
    clientSchema.remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Edit user
route.put('/edit-client/:id', (req, res) => {
    const {id} = req.params
    clientSchema.updateOne({_id: id}, {$set:{name, lastname, addres:{city,street, lat, len}, account_bank}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

module.exports = route