const request = require('request')

const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/37.8267,-122.4233?lang=pt&units=si'

request({url:url,json:true}, (error,response) => {
    //console.log(response.body.currently)
    const currently =  response.body.currently
    const daily = response.body.daily
    console.log(daily.data[0].summary +' It is currently '+ currently.temperature +' degrees out. There is a '+ currently.precipProbability +'% chance of rain')

})