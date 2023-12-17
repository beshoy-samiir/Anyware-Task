const mongoose = require("mongoose");

const quiz = mongoose.model("quiz", {
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
})

module.exports = quiz