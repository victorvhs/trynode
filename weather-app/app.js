const yargs = require('yargs')
const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

yargs.version('1.1')

yargs.command({
    command:'location',
    description:'Show the weather of the provided location',
    builder:{
        address:{
            description:'The location you wanto to know the weather',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        geocode(argv.address,(error,dataGeo) =>{
            if(error){
                return console.log(chalk.bgRedBright.bold(error))
            }
            forecast(dataGeo.latitude,dataGeo.longitude, (error, data) => {
                if(error){
                    return console.log(error)
                }
                console.log(data.sumary+
                            'It is currently '+chalk.blueBright.bold(data.temperature)+' degress.\n'+
                            'There is '+chalk.yellow.bold(data.precipProbability+'%')+
                            ' in '+dataGeo.location)
                  })
            })
    }
})



//console.log(yargs.argv)
yargs.parse()