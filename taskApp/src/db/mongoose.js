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
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }else{
                console.log('ok')
            }
        }
    }
    ,
    password:{
        type: String,
        required:true,
        trim:true,
        minlength: [6,'Must have 6 or more characters'],
        validate(value){
            if((value.toLowerCase()).includes('password')){throw new Error('Your password is Weak')}
        }
    },
    age :{
        type: Number,
        default : 0,
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
        required: true,
        trim:true
    },
    completed:{ 
        type:Boolean,
        default: false
    },
    date:{
        type:Date,
        default: Date.now
    }
})

// const user = new User({
//    name: '  Vhs  ',
//    email: 'MYEMAIL@mail.com',
//    password: 'Pa123AA'
   
// })
// user.save().then((result)=>{
//     console.log(result)
//     process.exit()
// }).catch((error)=>{
//     console.log(error)
//     process.exit()
// })

const newTask = new Task({
    description: 'clean house'
})


newTask.save().then((result)=>{
    console.log(result)
    process.exit()
}).catch((error)=>{
    console.log(error)
    process.exit()
})
