const express = require('express')
const path = require('path')

const public = path.join(__dirname,'../public')
const app = express()

app.set('view engine','hbs')
app.use(express.static(public))

app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather App',
        name: 'EUUUU'
    })
})

app.get('/weather', (req,res) =>{
    res.send({
        forecast : 'CHUVA FORTE',
        location: 'Goiania'
    })
})

app.listen(3000,() =>{
    console.log('server is Up on port 3000')
})