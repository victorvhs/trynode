console.log("Javasctrip is here")

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const urlData ='http://localhost:3000/weather?address='+location 
    fetch(urlData).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                return messageOne.textContent = data.error
            }
            messageOne.textContent = data.location 
            messageTwo.textContent = data.sumary + 
            "\nTemperatura:  " + data.temperature + "°" +
            "\nProbabilidade de chuva " + data.precipProbability +"%"
                })
    })

})