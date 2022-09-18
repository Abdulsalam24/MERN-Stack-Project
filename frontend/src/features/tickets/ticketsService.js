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

const getTicket = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(TICKET_API, config)
    
    console.log(response.data , ' all dattttttttttttttt')
    return response.data
}



const ticketService = {
    createTicket,
    getTicket
}

export default ticketService