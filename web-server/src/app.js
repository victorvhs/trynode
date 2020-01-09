const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Defines paths for Express
const public = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup for handlebars
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory
app.use(express.static(public))

const name = 'Victor VhS'
app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather App',
        name : 'Victor VhS'
    })
})

app.get('/about', (req,res) =>{
    res.render('about',{
        title: 'About us',
        name: name
    })
})
app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help is here',
        msg: 'We can help you',
        day : Date(),
        name: name
       })

})
app.get('/products', (req,res) =>{
    if(!req.query.search) {
        return res.send({
            error:'You must provaide a search term'
        })

    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/weather', (req,res) =>{
    if(!req.query.address){
        return res.send({
            error:'You must provaide a address'
        })
    }
    res.send({
        address: req.query.address
    })

   
})

app.get('/help/*',(req,res)=>{
    res.status(404).render('404',{
        title:'404',
        msg: 'Help article not found',
        name: name
    })

})
app.get('*', (req,res) => {
    res.status(404).render('404',{
        title: '404',
        msg:'Page Not found',
        name: name
    })

})
app.listen(3000,() =>{
    console.log('server is Up on port 3000')
})