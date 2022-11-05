const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")

module.exports = {

    login: async (req, res) => {
        const {email, password} = req.body
        console.log(email, password)

        const userExists = await userSchema.findOne({email, password})

        if(userExists) return sendRes(res, false, "all good", userExists)

        sendRes(res, true, "bad credentials", null)
    }
}