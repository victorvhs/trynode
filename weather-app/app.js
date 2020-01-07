const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Trindade Goias',(error,data) =>{
        console.log('Data: ',data)
        console.log('Error: ',error)
    })
    
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
