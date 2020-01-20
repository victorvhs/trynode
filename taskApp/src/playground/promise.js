require('../db/mongoose')
const Task = require('../models/task')

const deleteTaskAndCount = async (_id) => {
    await Task.findByIdAndDelete(_id)
    const count = await Task.countDocuments({completed:false})
    return count
}
deleteTaskAndCount('5e23120c0d03e908f8f86a').then((count) =>{
    console.log(count)
    process.exit()
}).catch((e =>{
    console.log(e)
}))