const express = require('express')
const router = new express.Router()
const Announcement = require("../Controllers/announcementController")

router.post('/addAnnouncement', Announcement.addAnnoucement)
router.get('/getAllAnnouncements', Announcement.getAll)
router.get('/getAnnouncement/:id', Announcement.getAnnoucement)
router.delete('/deleteAnnouncement/:id', Announcement.deleteAnnouncement)
router.put('/editAnnouncement/:id', Announcement.editAnnouncement)


module.exports = router