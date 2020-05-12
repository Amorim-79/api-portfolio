const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { errors } = require('celebrate')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://amorim:amorim0311@cluster0-ktiqx.mongodb.net/portfolio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(errors())
app.use(routes)



app.listen(process.env.PORT || 3333)