const https = require('https')
const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/40,-75?lang=pt&units=si'

const request = https.request(url, (resp) =>{
    let data = ''

    resp.on('data',(chunk) =>{
        data = data + chunk.toString()
        
    })
    resp.on('end',() =>{
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) =>{
    console.log(error)

})

request.end()