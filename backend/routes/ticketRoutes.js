const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const {getTickets , createTicket} = require("../controllers/ticketController")

const router = express.Router()

router.route("/").get(protect , getTickets).post(protect , createTicket)
 
module.exports = router