const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "amorimdev.portfolio@gmail.com",
        pass: "pedro147258369"
    }
})

module.exports = {
    async send(req, res) {

        const { name, title, message, email } = req.body

        transporter.sendMail({
            from: `${name} <amorimdev.portfolio@gmail.com>`,
            to: "pedrobatutu@gmail.com",
            subject: title,
            text: `Email enviado por: ${email} || ${message}`
        })

        res.end()
    }

}