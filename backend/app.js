const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./routes/routes")
// const session = require("express-session")

mongoose.connect("mongodb+srv://admin:admin@cluster0.mm63och.mongodb.net/ProjectSailing")
    .then(() => {
        console.log('Happy Hacking')
    }).catch(e => {
    console.log('CONNECTION ERROR')
})

app.use(cors())

app.use(express.json())

app.listen(4000)

app.use("/", mainRouter)
