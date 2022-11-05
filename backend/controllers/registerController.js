const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")

module.exports = {
    register: async (req, res) => {
        const {email, passOne: password} = req.body

        new userSchema({
            email,
            password
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    }
}