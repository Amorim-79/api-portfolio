const nodemailer = require('nodemailer')

require('dotenv/config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_REMETENTE,
        pass: process.env.EMAIL_REMETENTE_PASS
    }
})

module.exports = {
    async send(req, res) {

        const { name, title, message, email } = req.body

        transporter.sendMail({
            from: process.env.EMAIL_REMETENTE,
            to: process.env.EMAIL_DESTINO,
            subject: title,
            text: `Email enviado por: ${name} / ${email} || ${message}`
        })

        res.end()
    }

}