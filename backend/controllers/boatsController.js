const boatsSchema = require("../schemas/boatsSchema")
const sendRes = require("../modules/universalRes")
// const {uid} = require("uid")
// const bcrypt = require("bcrypt")

module.exports = {
    getBoats: async (req, res) => {
        const boats = await boatsSchema.find({});
        return sendRes(res, false, "all good", {boats});
    },
    filterBoatsByYear: async (req, res) => {
        const year = req.params.year;
        const boats = await boatsSchema.find({madeYear: year});
        return sendRes(res, false, "all good", {boats});
    }
}