const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")
const {uid} = require("uid")

module.exports = {
    register: async (req, res) => {
        const {email, passOne: password} = req.body

        new userSchema({
            email,
            password,
            secret: uid()
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    }
}