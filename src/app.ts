// const express=require('express');
import console from 'console';
import express,{Application,Request,Response,NextFunction} from 'express'
import { connect } from 'http2';
import mongoose from 'mongoose';
require('express-async-errors')

const app:Application=express();
const taskRouter=require('./routes/tasks')
 const notFoundMiddleware=require('./middleware/not-found')
const connectDB=require('./db/connect')
const errorHandlerMiddleware=require('./middleware/error-handler')

app.use(express.json())
app.get('/',(req:Request,res:Response)=>res.send('welcome to todoapi'));

app.use('/tasks',taskRouter);


 app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const start=async()=>{
    try {
        await connectDB("mongodb://localhost:27017/task-api");
        app.listen(process.env.PORT || 8080,()=>console.log('running'));

    } catch (error) {
        console.log(error)
    }
}
start();
