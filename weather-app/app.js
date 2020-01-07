const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Aparecida de Goainia',(error,dataGeo) =>{
    if(error){
        return console.log(error)
    }
    forecast(dataGeo.latitude,dataGeo.longitude, (error, data) => {
        if(error){
            return console.log(error)
        }
        console.log('Error', error)
        console.log('Data', data)
        console.log(dataGeo.location)
          })
    })


