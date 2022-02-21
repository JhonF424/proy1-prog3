const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 3000
const execute_app = express()

execute_app.listen(port, ()=>{console.log('listening the port', port)})

execute_app.get('/', (req, res) => {
    res.send('Primer proyecto')
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>console.log('Connected with mongodb'))
.catch((error)=>console.error(error))

const clientSchemaRoutes = require('./routes/client_routes')
execute_app.use(express.json())

execute_app.use('/dashboard', clientSchemaRoutes)