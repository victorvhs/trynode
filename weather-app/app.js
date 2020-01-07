const request = require('request')

const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/37.8267,-122.4233'

request({url:url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)

})