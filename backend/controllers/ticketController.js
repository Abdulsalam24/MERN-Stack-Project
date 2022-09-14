const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")


const getTickets = asyncHandler(async (req, res) => {

    //check if it the user
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.find({ user: req.user.id })

    res.status(200).json(tickets)
})


const createTicket = asyncHandler(async (req, res) => {

    const { product, description } = req.body

    if (!product || !description) {
        res.status(400)
        throw new Error("Product or description is not filled")
    }

    const user = User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: "new"
    })

    res.status(201).json(ticket)
})


const getTicket = asyncHandler(async (req , res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(400)
        throw new Error("User not found")
    }

    const ticket = await Ticket.find({user : req.user.id})
    if(!ticket){
        res.status(400)
        throw new Error("User not authorized")
    }

    res.status(200).json(ticket)
})



module.exports = {
    getTickets, createTicket,getTicket
}