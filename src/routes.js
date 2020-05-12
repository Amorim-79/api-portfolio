const { Router } = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const EmailController = require('./controllers/EmailController')
const ProjectController = require('./controllers/ProjectController')

const routes = Router()

routes.post("/send", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        title: Joi.string().required(),
        message: Joi.string().required(),
        email: Joi.string().required().email()
    })
}), EmailController.send)

routes.post("/projects", ProjectController.store)
routes.get("/projects", ProjectController.index)
routes.get("/projects/:tag", ProjectController.indexOne)

module.exports = routes