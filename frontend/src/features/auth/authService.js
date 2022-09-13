import axios from 'axios'

const API_USER = '/api/users'
const API_USER_LOGIN = '/api/users/login'


const register = async (userData) => {
    const response = await axios.post(API_USER, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const login = async (loginData) => {
    const response = await axios.post(API_USER_LOGIN , loginData)
    if(response.data){
        localStorage.setItem("user" , JSON.stringify(response.data))
    }
    return response.data
}

const logout = async () => {
    return await localStorage.removeItem("user")
}


const authService = {
    register,
    logout,
    login
}

export default authService