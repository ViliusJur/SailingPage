const express = require("express")
const router = express.Router()

const {
    getBoats,
    filterBoatsByYear
} = require("../controllers/boatsController")

const {
    getEvents,
} = require("../controllers/eventsController")

router.get("/getBoats", getBoats)
router.get("/getEvents", getEvents)
router.get("/filterBoatsByYear/:year", filterBoatsByYear)

module.exports = router