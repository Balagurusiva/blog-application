import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();
const app = express() 
mongoose.connect(process.env.MONGODBURL )
    .then(() => {
        console.log("db connected")
        app.listen(process.env.PORT, () =>{console.log("listening in ",process.env.PORT)})
    })
    .catch((error) => {
        console.log(error)  
    })

 