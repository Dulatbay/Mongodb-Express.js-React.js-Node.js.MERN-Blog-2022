import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'


const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const connString = process.env.DB_CONNECTION_STR


app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: 'All is fine'})
})


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
