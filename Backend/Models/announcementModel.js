const mongoose = require("mongoose");

const annoucement = mongoose.model("annoucement", {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = annoucement