const express = require('express')
const path = require('path')

const public = path.join(__dirname,'../public')
const app = express()

app.use(express.static(public))


// app.get('/help',(req,res) =>{
//     res.send({
//         name: 'Victor',
//         age: 27
//     })
// })
// app.get('/about',(req,res) =>{
//     res.send('<h1>About Page</h1>')
// })

app.get('/weather', (req,res) =>{
    res.send({
        forecast : 'CHUVA FORTE',
        location: 'Goiania'
    })
})

app.listen(3000,() =>{
    console.log('server is Up on port 3000')
})