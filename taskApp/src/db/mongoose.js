const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true

})

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{ 
        type:Boolean},
    date:{
        type:String
    }
})

const newTask = new Task({
    description: 'Read a book',
    completed: false,
    date: Date.now()
})

newTask.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
