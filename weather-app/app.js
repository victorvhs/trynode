const request = require('request')

const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/37.8267,-122.4233?lang=pt&units=si'
const urlAddress = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Aparecida%20de%20Goiania.json?access_token=pk.eyJ1IjoidmhyZWlzIiwiYSI6ImNrNTM1ZHdtYzAzNTUzZHFrMWRsbnpnOWcifQ.9SgOuQ8swGUZw0tnstwfWw&limit=1'

request({url:url,json:true}, (error,response) => {
    //console.log(response.body.currently)
    if(error){
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log('Unable to find location')
    }else {
        const currently =  response.body.currently
        const daily = response.body.daily
        console.log(daily.data[0].summary +' It is currently '+ currently.temperature +' degrees out. There is a '+ currently.precipProbability +'% chance of rain')
    }
})

request({url:urlAddress,json:true}, (error,response)=>{
    
    if(error){
        console.log('Unable to connect to geolocation service')
    }else if (response.body.features.length === 0){
        console.log('Unable to find your location')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('Lat and Long '+ latitude, longitude)
    }
})