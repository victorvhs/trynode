const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()


router.delete('/tasks/:id',auth, async (req,res)=>{
    try {
        const tasks = await Task.findOneAndDelete({_id:req.params.id, owner:req.user._id})
        
        if(!tasks) return res.status(404).send()
        res.send(tasks)
    } catch (e) {
        res.status(500).send()        
    }
})

router.patch('/tasks/:id', auth , async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed','description']
    const isValidOperation = updates.every((update) =>allowedUpdates.includes(update))
    
    if(!isValidOperation) return res.status(400).send({'error':'Invalid Updates'})
    
    try {
        const task = await Task.findOne({_id:req.params.id,owner:req.user._id})
        //const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).send()
        updates.forEach((update) => task[update] = req.body[update])
        task.save()
        //const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        res.send(task)
    } catch (e) {
        console.log("e"+e)
        res.status(400).send(e)
    }
})

router.get('/tasks',auth ,async (req,res)=>{

    try {
        //const tasks = await Task.findOne({owner:req.user._id})
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()        
    }
})

router.get('/tasks/:id',auth ,async (req,res)=>{
    const _id = req.params.id
    try {
        //const task = await Task.findById(_id)
        const task = await Task.findOne({_id, owner:req.user._id})
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(510).send()   
    }
})

router.post('/tasks', auth,async (req,res)=>{
    
    const task = new Task({
        ...req.body,
        owner:req.user._id
    })
    try {
        await task.save(task)
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)        
    }
})

module.exports = router