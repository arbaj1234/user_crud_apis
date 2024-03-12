import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import userRouter from './routes/userRoute.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

//routes
app.use(express.json())
app.use('/api/users' , userRouter)
 

// db connection
connectDB()
app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
})