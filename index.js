import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import user from './routes/user-routes.js'

dotenv.config();

const app = express()

app.use(express.json())
app.use('/api/user',user)

mongoose
    .connect(process.env.MONGODBURL)
    .then(() => {
        console.log("db connected")
        app.listen(process.env.PORT, () => { console.log("listening in ", process.env.PORT) })
    })
    .catch((error) => {
        console.log(error)
    })

