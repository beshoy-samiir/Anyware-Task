const announcement = require('../Models/announcementModel');

class Announcement {

    static addAnnoucement = async(req, res)=>{
        try{
            const newannoucement = new announcement({title : req.body.title, description: req.body.description})
            await newannoucement.save()
            res.status(201).send({
                apiStatues: true,
                newannoucement,
                message: "Annoucement Created"
            })
        }
        catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't add annoucement",
            })
        }
    }

    static getAll = async (req, res) => {
        try {
            const annoucements = await announcement.find()
            res.send({
                apiStatues: true,
                data: annoucements,
                message: "data featched successfully"
            })
        }
        catch (e) {
            res.status(400).send({
                apiStatues: false,
                data: e.message,
                message: "error fetching announcements"
            })
        }
    }

    static getAnnoucement = async (req, res) => {
        try {
            const annoucement = await announcement.findById(req.params.id)
            res.send({
                apiStatues: true,
                data: annoucement,
                message: "data featched successfully"
            })
        }
        catch (e) {
            res.status(400).send({
                apiStatues: false,
                data: e.message,
                message: "error fetching announcement"
            })
        }
    }

    static deleteAnnouncement = async (req, res) => {
        try {
            const annoucement = await announcement.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatues: true,
                data: annoucement,
                message: "Delete announcement"
            })
        } catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't delete announcement",
            });
        }
    }

    static editAnnouncement = async (req, res) => {
        try {
            const editAnnouncement = await announcement.findById(req.params.id)
            if (editAnnouncement) {
                editAnnouncement.title = req.body.title;
                editAnnouncement.description = req.body.description;
                await editAnnouncement.save();
            }
            else {
                throw new Error("error");
            }
            res.status(200).send({
                apiStatues: true,
                editAnnouncement,
                message: "edit Announcement"
            })
        }
        catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't edit Announcement",
            });
        }
    }
}

module.exports = Announcement