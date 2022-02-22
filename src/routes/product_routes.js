const express = require('express')
const clientSchema = require('../models/product_model')
const route = express.Router()

//Product creation
route.post('/new-product', (req, res) => {
    const user = clientSchema(req.body)
    user.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Show products
route.get('/products', (req, res) => {
    clientSchema.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Show product info 
route.get('/find-product/:id', (req, res) => {
    const {id} = req.params
    clientSchema.findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Delete product
route.delete('/delete-product/:id', (req, res) => {
    const {id} = req.params
    clientSchema.remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//Edit product
route.put('/edit-product/:id', (req, res) => {
    const {id} = req.params
    clientSchema.updateOne({_id: id}, {$set:{product, img, price, cant, state}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

module.exports = route