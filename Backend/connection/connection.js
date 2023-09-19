const mongoose = require("mongoose")

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log("Connected to DB 🚀");
    } catch (error) {
        console.log("Error in connection :" + error);
    }
}

module.exports = connectToDB