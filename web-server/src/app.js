const express = require('express')
const path = require('path')

const app = express()

// Defines paths for Express
const public = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates')

//Setup for handlebars
app.set('view engine','hbs')
app.set('views',viewsPath)

//Setup static directory
app.use(express.static(public))

app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather App',
        name: 'EUUUU'
    })
})

app.get('/about', (req,res) =>{
    res.render('about',{
        title: 'About us',
        name : 'Victor VhS'
    })
})
app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help is here',
        msg: 'We can help you',
        day : Date()
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