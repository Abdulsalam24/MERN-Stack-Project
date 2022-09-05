const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')

const registerUser = asyncHandler(async (req, res) => {

    //check if user credntial available
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("please enter field")
    }

    //check if user Exist
    const userExist = await User.findOne({email})

    if (userExist) {
        res.status(400)
        throw new Error("User already exist")
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedpassword = await bcryptjs.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedpassword,
    })
    
    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        })
    }else{
        res.status(400)
        throw new Error("User data wrong")
    }

})



const loginUser = asyncHandler(async (req, res) => {
    res.send("Login user")
})

module.exports = {
    registerUser,
    loginUser
}