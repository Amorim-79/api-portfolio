const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "amorimdev.portfolio@gmail.com",
        pass: "pedro147258369"
    }
})

app.post("/send", (req,res) => {

    const {name, title, message} = req.body
    
    transporter.sendMail({
        from: `${name} <amorimdev.portfolio@gmail.com>`,
        to: "pedrobatutu@gmail.com",
        subject: title,
        text: message
    })

    console.log(nome, titulo, mensagem)

    res.end()
    
})

app.listen(process.env.PORT || 3333)