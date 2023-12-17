const router = require("express").Router()
const user = require("../Controllers/userController")


router.post("/login", user.login)
router.get("/allUsers", user.getAll)
router.get("/User/:id", user.getSingle)
router.delete('/deleteUser/:id', user.deleteUser)


module.exports = router
