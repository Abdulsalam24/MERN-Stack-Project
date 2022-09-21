import axios from "axios"

const API_URL = '/api/tickets/'

const getNote = async (ticketId, token) => {
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + ticketId + "/note", config)
    return response.data
}

const noteService = {
    getNote
}

export default noteService