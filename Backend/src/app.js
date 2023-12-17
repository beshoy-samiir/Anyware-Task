const express = require("express")
const cors = require('cors');

const app = express()

require("dotenv").config()
app.use(express.json())
app.use(cors())
require("../Models/dbCon")

const users = require("../Routes/userRoutes")
const Announcement = require("../Routes/announcementRoutes")
const Quiz = require("../Routes/quizRoutes")
app.use(users)
app.use('/announcement',Announcement)
app.use('/quiz',Quiz)

app.get("*", (req, res) => res.send({ error: "invalid url" }))

module.exports = app
