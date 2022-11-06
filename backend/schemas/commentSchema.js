const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const exportBoatsSchema = mongoose.model("comment", commentSchema)

module.exports = exportBoatsSchema;