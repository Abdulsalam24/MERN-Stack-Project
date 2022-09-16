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


const ticketService = {
    createTicket
}

export default ticketService