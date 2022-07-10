require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const personRoutes = require('./routes/personRoutes')
const productRoutes = require('./routes/productRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/person', personRoutes)
app.use('/product', productRoutes)


app.get('/', (req, res) => {
    res.json({ message: "ok"})
})


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect('mongodb+srv://' + DB_USER + ':' + DB_PASSWORD + '@cluster0.ft2n9.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectamos ao mongo!')
    app.listen(process.env.PORT || 3000)
})
.catch((err) => console.log(err))



