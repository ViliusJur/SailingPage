const mongoose = require("mongoose")
const Schema = mongoose.Schema

const boatsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    LOA: {
        type: Number,
        required: true
    },
    madeYear: {
        type: String,
        required: true
    }
})

const exportBoatsSchema = mongoose.model("boats", boatsSchema)

module.exports = exportBoatsSchema;