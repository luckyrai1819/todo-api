import {Request,Response} from 'express';

const Task=require('../model/task');

const createTask=async(req:Request,res:Response)=>{

    const task={
        name:req.body.name,
        status:req.body.status
    }
    const data=await Task.create(task);
    res.status(200).json(data);

}

const getAllTasks=async(req:Request,res:Response)=>{
    const data=await Task.find();
    if(!data)
    res.status(200).send('no task present');

    res.status(200).json(data);
}

const getTask=async(req:Request,res:Response)=>{
    const data=await Task.findById(req.params.id);
    if(!data)
    res.status(200).send(`no task with id: ${req.params.id}`);

    res.status(200).json(data);
}
const updateTask=async(req:Request,res:Response)=>{
    const data=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    if(!data)
    res.status(200).send(`no task with id: ${req.params.id}`);

    res.status(200).json(data);
}
const deleteTask=async(req:Request,res:Response)=>{
    const data=await Task.findByIdAndDelete(req.params.id);
    if(!data)
    res.status(200).send(`no task with id: ${req.params.id}`);

    res.status(200).json('task deleted');
}

module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask};