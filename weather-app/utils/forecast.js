const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/'+latitude+','+longitude+'?lang=pt&units=si'
    request({url:url,json:true},(error,response) =>{
        if(error){
            callback('Unable to connetc to weather service')
        }else if(response.body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,{
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability,
                sumary: response.body.daily.data[0].summary
            })
        }
    })
}
module.exports = forecast