import axios from "axios"


const TICKET_API = '/api/tickets'


const createTicket = async (ticketData) => {
    const response = await axios.post(TICKET_API, ticketData)

    console.log(response.data, 'dattaaaaaaaaaaaaaaaa')

}


const ticketService = {
    createTicket
}

export default ticketService