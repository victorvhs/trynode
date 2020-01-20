const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.delete('/tasks/:id', async (req,res)=>{
    try {
        const tasks = await Task.findByIdAndDelete(req.params.id)
        if(!tasks) return res.status(404).send()
        res.send(tasks)
    } catch (e) {
        res.status(500).send()        
    }
})

router.patch('/tasks/:id', async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed','description']
    const isValidOperation = updates.every((update) =>allowedUpdates.includes(update))
    
    if(!isValidOperation) return res.status(400).send({'error':'Invalid Updates'})
    
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,
            {new:true, runValidators:true})
        if(!task) return res.status(404).send()
        res.send(task)
    } catch (e) {
        console.log("e"+e)
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req,res)=>{

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()        
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(510).send()   
    }
})

router.post('/tasks', async (req,res)=>{
    const task = new Task(req.body)
    try {
        await task.save(task)
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)        
    }
})

module.exports = router