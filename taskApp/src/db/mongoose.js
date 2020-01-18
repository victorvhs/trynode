const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true

})
const User = mongoose.model('User',{
    name :{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }else{
                console.log('ok')
            }
        }
    },
    age :{
        type: Number,
        validate(value){
            if(value <0) {
                throw new Error('Age must be positive number')
            }
        }
        
    }
})
const Task = mongoose.model('Task',{
    description:{
        type:String,
        require: true
    },
    completed:{ 
        type:Boolean,
        require: true
    },
    date:{
        type:String
    }
})

const user = new User({
   name: 'VHS',
   email: 'V@'
   
})
user.save().then((result)=>{
    console.log(result)
    process.exit()
}).catch((error)=>{
    console.log(error)
    process.exit()
})

// const newTask = new Task({
//     description: 'Make a cake',
//     completed: false,
//     date: Date.now()
// })


// newTask.save().then((result)=>{
//     console.log(result)
//     process.exit()
// }).catch((error)=>{
//     console.log(error)
//     process.exit()
// })
