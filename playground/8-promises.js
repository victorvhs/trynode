const doWorkPromise = new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        //resolve([1,4,7])
        reject('Deu Ruim')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.error(error)
})