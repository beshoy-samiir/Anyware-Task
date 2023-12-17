const express = require('express')
const router = new express.Router()
const Quiz = require("../Controllers/quizController")

router.post('/addQuiz', Quiz.addQuiz)
router.get('/getAllQuizs', Quiz.getAll)
router.get('/getQuiz/:id', Quiz.getQuiz)
router.delete('/deleteQuiz/:id', Quiz.deleteQuiz)
router.put('/editQuiz/:id', Quiz.editQuiz)


module.exports = router