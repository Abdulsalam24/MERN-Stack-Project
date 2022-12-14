import axios from "axios"


const TICKET_API = '/api/tickets/'

const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(TICKET_API, ticketData, config)
    return response.data
}

const getTickets = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(TICKET_API, config)

    return response.data
}

const getTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(TICKET_API + ticketId, config)
    return response.data
}

const closeTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(TICKET_API + ticketId,{ status: "closed" }, config)
    console.log(response, 'dataaa')
    return response.data
}

const deleteTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return await axios.delete(TICKET_API + ticketId, config)
}

const updateTicket = async (ticketId, description, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(TICKET_API + ticketId, { description }, config)
    return response.data
}



const ticketService = {
    createTicket,
    getTickets,
    getTicket,
    closeTicket,
    deleteTicket,
    updateTicket
}



export default ticketService