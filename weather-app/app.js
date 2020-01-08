const yargs = require('yargs')
const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
 
const address = process.argv[2]
if (!address){
    console.log(chalk.bgRed.yellowBright.bold('Provaide an address'))
}
else{
    geocode(address,(error,{latitude, longitude,location}) =>{
        if(error){
            return console.log(chalk.bgRedBright.bold(error))
        }
        forecast(latitude,longitude, (error, {temperature,sumary,precipProbability}) => {
            if(error){
                return console.log(error)
            }
            console.log(sumary+
                        'It is currently '+chalk.blueBright.bold(temperature)+' degress.\n'+
                        'There is '+chalk.yellow.bold(precipProbability+'%')+
                        ' in '+location)
                })
        })

}
