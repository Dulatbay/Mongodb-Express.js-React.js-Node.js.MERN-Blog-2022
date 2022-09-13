import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'



const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const connString = process.env.DB_CONNECTION_STR
async function start(){
    try{
        await mongoose.connect(connString)
        app.listen(PORT, ()=>console.log("Start"))
    }
    catch(ex){
        console.log(ex)
    }
}
start()
