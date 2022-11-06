const commentSchema = require("../schemas/commentSchema")
const sendRes = require("../modules/universalRes")


module.exports = {
    getComments: async (req, res) => {
        const comments = await commentSchema.find({}).sort({_id: -1});
        return sendRes(res, false, "all good", {comments});
    },

    addComment: async (req, res) => {
        const {username, avatar, comment} = req.body

        new commentSchema({
            username,
            avatar,
            comment
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    }

}