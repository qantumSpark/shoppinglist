const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/api/items')
const app = express()
//MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Mongoose
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/shoppinglist', {useNewUrlParser: true, useUnifiedTopology:true})
mongoose.connection.on('error' , err => console.log(err))
mongoose.connection.once('open' , () => console.log("connected to mongoDB"))

//Route
app.use('/api/items', items)


app.listen(process.env.PORT || 5000, ()=> console.log("Server starded"))