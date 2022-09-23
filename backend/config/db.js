const { mongoose } = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
         console.log(`connected db to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error  :${error.message}`.yellow.underline.bold)
    }
}

module.exports = connectDb
