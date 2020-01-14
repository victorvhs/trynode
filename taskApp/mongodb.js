// * CRUD mongodb

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser:true,useUnifiedTopology: true }, (error, client) =>{
    if(error){
        return console.log('Error: '+error)
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Santos',
    //     age: 21
    // },(error,result) =>{
    //     if(error) return console.log("error")
    //      console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'GEM',
    //         age: 17
    //     },{
    //         name:'Gunther',
    //         age: 900
    //     }
    // ], (error, result) =>{
    //     if(error) return console.log(error)
    //     console.log(result.ops)

    // })

    // db.collection('task').insertMany([
    //     {
    //         description: 'Read one chapter',
    //         completed: true,
    //         date: Date.now()
    //     },{
    //         description: 'Eat the salad',
    //         completed: false,
    //         date: Date.now()
    //     },{
    //         description: 'Study languages',
    //         completed: true,
    //         date: Date.now()
    //     }
    // ],
    //     (error, result)=>{
    //         if (error) return console.log('error')
    //         console.log(result.ops)
    //     })


    db.collection('users').findOne({name:'GEM'}, (error,user) =>{
        if(error) return console.log("erro: "+ error)
        console.log(user)

    })

})