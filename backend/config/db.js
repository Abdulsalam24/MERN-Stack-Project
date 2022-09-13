const { mongoose } = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL_LOCAL)
         console.log(`connected db to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error  :${error.message}`.red.underline.bold)
    }
}

module.exports = connectDb
