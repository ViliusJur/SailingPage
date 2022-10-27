const mongoose = require("mongoose")
const Schema = mongoose.Schema

const eventsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const exportEventsSchema = mongoose.model("events", eventsSchema)

module.exports = exportEventsSchema;