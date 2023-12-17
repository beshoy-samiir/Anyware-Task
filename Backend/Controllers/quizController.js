const quiz = require('../Models/quizModel');

class Quiz {

    static addQuiz = async(req, res)=>{
        try{
            const newQuiz = new quiz({title : req.body.title, question: req.body.question})
            await newQuiz.save()
            res.status(201).send({
                apiStatues: true,
                newQuiz,
                message: "Quiz Created"
            })
        }
        catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't add Quiz",
            })
        }
    }

    static getAll = async (req, res) => {
        try {
            const quizs = await quiz.find()
            res.send({
                apiStatues: true,
                data: quizs,
                message: "data featched successfully"
            })
        }
        catch (e) {
            res.status(400).send({
                apiStatues: false,
                data: e.message,
                message: "error fetching quizs"
            })
        }
    }

    static getQuiz = async (req, res) => {
        try {
            const getquiz = await quiz.findById(req.params.id)
            res.send({
                apiStatues: true,
                data: getquiz,
                message: "data featched successfully"
            })
        }
        catch (e) {
            res.status(400).send({
                apiStatues: false,
                data: e.message,
                message: "error fetching quiz"
            })
        }
    }

    static deleteQuiz = async (req, res) => {
        try {
            const deleteQuiz = await quiz.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatues: true,
                data: deleteQuiz,
                message: "Delete quiz"
            })
        } catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't delete quiz",
            });
        }
    }

    static editQuiz = async (req, res) => {
        try {
            const editQuiz = await quiz.findById(req.params.id)
            if (editQuiz) {
                editQuiz.title = req.body.title;
                editQuiz.question = req.body.question;
                await editQuiz.save();
            }
            else {
                throw new Error("error");
            }
            res.status(200).send({
                apiStatues: true,
                editQuiz,
                message: "edit Quiz"
            })
        }
        catch (e) {
            res.status(404).send({
                apiStatues: false,
                data: e.message,
                message: "can't edit quiz",
            });
        }
    }
}

module.exports = Quiz