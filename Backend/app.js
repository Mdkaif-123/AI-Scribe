require('dotenv').config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

// routes
const storyRoute = require("./routes/storyRoute")
const userRoute = require('./routes/userRoute')


app.use(express.json())


//* Using cors for security purpose
const cors = require('cors');
app.use(cors());


// Connect to DB
const connectToDB = require('./connection/connection')
connectToDB()


// Default route
app.get('/', (req, res) => { res.send("<h1>Server is running 😊</h1>") })


// Story route
app.use('/story', storyRoute)

// User route
app.use('/user', userRoute)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🎉`);
})