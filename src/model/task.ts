import { timeStamp } from "console";
import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        maxlength:20,
        required:[true,'must be provided']
    },
    status:{
        type:String,
        enum:{
            values:
            ['pending','completed'],
        message:'{Value} is not supported'
            },

        required:[true,'must be provided']
    }
},{timestamps:true})

module.exports=mongoose.model('task',taskSchema);