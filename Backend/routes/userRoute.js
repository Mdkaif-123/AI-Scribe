
const express = require("express")
const router = express.Router()
const controller = require("../controllers/userController")


router.post("/signUp", controller.signUp)
router.post("/login", controller.login)

module.exports = router