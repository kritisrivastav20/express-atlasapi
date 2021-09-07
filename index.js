const express = require('express')
const mongoose = require('mongoose')
const url = 
'mongodb+srv://KritiDev:vanya2016@shopcluster.nc0aj.mongodb.net/test?retryWrites=true&w=majority'
const port = 9000
const index = express()
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
index.use(express.json())

const connectn = mongoose.connection

const feedRouter = require('./routes/feed')
index.use('/feed', feedRouter)

connectn.on('open',() => {
    console.log('connected...')
})

index.listen(port, function() {
    console.log('Server started')
})