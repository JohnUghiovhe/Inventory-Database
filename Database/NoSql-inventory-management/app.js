const express = require('express')
const path = require('path')
const fs = require('fs')
const { connectToMongoDB } = require("./db")
const productRoute = require("./src/routes/products")
require("dotenv").config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("/products", productRoute)

// ...existing code...
// set up views and static assets
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "public")))

// determine a default view to render at "/"
// tries index.ejs first, otherwise falls back to the first .ejs file found (or 'public' if none)
let defaultView = 'public'
try {
  const viewsDir = path.join(__dirname, 'views')
  const files = fs.readdirSync(viewsDir)
  const ejsFiles = files.filter(f => path.extname(f).toLowerCase() === '.ejs')
  if (ejsFiles.length > 0) {
    defaultView = ejsFiles.includes('index.ejs') ? 'index' : path.basename(ejsFiles[0], '.ejs')
  }
} catch (err) {
  // keep defaultView = 'public' if views folder is missing or unreadable
}

//Connecting to mongoDB instance
connectToMongoDB()

app.get("/", (req, res) => {
    // render views/<defaultView>.ejs
    res.render(defaultView, { title: 'Home' })
})
// ...existing code...

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
});