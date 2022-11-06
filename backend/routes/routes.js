const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid} = require("../middleware/middle")

const {register} = require("../controllers/registerController")
const {login} = require("../controllers/loginController")

const {
    getBoats,
    filterBoatsByYear
} = require("../controllers/boatsController")

const {getComments, addComment} = require("../controllers/commentController")

const {
    getEvents,
} = require("../controllers/eventsController")

router.get("/getBoats", getBoats)
router.get("/getEvents", getEvents)
router.get("/filterBoatsByYear/:year", filterBoatsByYear)
router.post("/register", emailValid, passwordsValid, userValid, register)
router.post("/login", login)
router.get("/getComments", getComments)
router.post("/addComment", addComment)


module.exports = router