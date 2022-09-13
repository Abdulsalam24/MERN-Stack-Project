const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")


const getTickets = asyncHandler(async (req, res) => {
    
    res.send({ message: "GetTickets" })
})


const createTicket = asyncHandler(async (req, res) => {
    res.send({ message: "CreateTicket" })
})


module.exports = {
    getTickets, createTicket
}