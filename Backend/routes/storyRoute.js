
const express = require("express")
const router = express.Router()
const controller = require("../controllers/storyController")
const { verifyUserToken } = require("../middleware/authentiaction")

router.get('/top-voted-stories', verifyUserToken, controller.getStories)
router.post('/generate',verifyUserToken, controller.generateStory)
router.post('/save',verifyUserToken, controller.saveStory)
router.put('/update/:id',verifyUserToken, controller.updateStory)
router.delete('/delete/:id',verifyUserToken, controller.deleteStory)


module.exports = router