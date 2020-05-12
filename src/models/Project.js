const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: String,
    link: String,
    description: String,
    images: [String],
    tag: String   
})

module.exports = mongoose.model('Project', ProjectSchema)