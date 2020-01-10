console.log("Javasctrip is here")

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value

    const urlData ='http://localhost:3000/weather?address='+location 
    fetch(urlData).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                return console.error("Erro: ",data.error)
            }
            console.log(data)
        })
    })

})