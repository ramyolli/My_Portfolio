// import express from 'express'

const testRouter = require("./routes/Testimonials")
const contactRouter = require("./routes/Contact")
const express = require("express")
const { resolve, join } = require('path')
const app = express();
app.use(express.json())
const port = process.env.PORT || 4000
const path = join(__dirname, "./image.json");
const cors = require("cors")
app.use(cors())
app.use("/testimonials", testRouter)
app.use("/contacts", contactRouter)
const start = async () => {
    try {
        await app.listen(port, () => {
            console.log(`server is running on port: ${port}`)
        })
        require("./db/connections")
    }
    catch (err) {
        console.log(ere)

    }

}
start()

