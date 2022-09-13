const asyncHandler = require("express-async-handler")



const getTickets = asyncHandler(async (req, res) => {
    console.log({ message: "GetTickets" })
})


const createTicket = asyncHandler(async (req, res) => {
    console.log({ message: "CreateTicket" })
})


module.exports = {
    getTickets, createTicket
}