const eventsSchema = require("../schemas/eventsSchema")
const sendRes = require("../modules/universalRes")
// const {uid} = require("uid")
// const bcrypt = require("bcrypt")

module.exports = {
    getEvents: async (req, res) => {
        const events = await eventsSchema.find({});
        return sendRes(res, false, "all good", {events});
    }
}