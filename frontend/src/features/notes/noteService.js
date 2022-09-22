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


const createNote = async (noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + ticketId + "/note", {text : noteText}, config)
    console.log(response.data, 'dataaa')
    return response.data
}


const noteService = {
    getNote, createNote
}

export default noteService