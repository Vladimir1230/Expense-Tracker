const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { db } = require('./db/db');
const { readdirSync } = require('fs')
const app = express()

dotenv.config();

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

server()