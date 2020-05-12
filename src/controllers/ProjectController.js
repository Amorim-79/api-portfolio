const Project = require('../models/Project')

const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async store (req, res) {
        const { name, link, description, images, tag } = req.body

        const imagesArray = parseStringAsArray(images)

        await Project.create({
            name,
            link,
            description,
            images: imagesArray,
            tag
        })

        return res.end()
    },

    async index (req, res) {
        const projects = await Project.find()

        return res.json(projects)
    },

    async indexOne (req, res) {
        const { tag } = req.params

        const project = await Project.findOne({
            tag: {
                $in: tag
            }
        })

        return res.json(project)
    }
}