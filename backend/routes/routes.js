const express = require("express")
const router = express.Router()

const {
    getBoats,
} = require("../controllers/boatsController")

const {
    getEvents,
} = require("../controllers/eventsController")

router.get("/getBoats", getBoats)
router.get("/getEvents", getEvents)

module.exports = router