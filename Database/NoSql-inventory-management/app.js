const express = require('express')
const { connectToMongoDB } = require("./db")
const productRoute = require("./src/routes/products")
require("dotenv").config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/products", productRoute)

//Connecting to mongoDB instance
connectToMongoDB()

app.get("/", (req, res) => {
    res.send('Welcome home')
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
});
