import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/auth.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


// Middle ware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', router)



async function start(){
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0vkyfwz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        app.listen(PORT, ()=>{
            console.log(`SERVER WORKING ON PORT ${PORT}\nDatabase - ${DB_NAME}`)
        })
    }
    catch(ex){
        console.log(ex)
    }

}
start()
