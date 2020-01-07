// setTimeout(()=>{
//     console.log('2 seconds later')
// },2000)

// const names = ['vanessa','carlos','amarildo']
// const shortNames = names.filter((name)=>{
//     return name.length <= 6
// })

// const geocode = (address,callback) =>{
//     setTimeout(()=>{
//         const data = {
//             latidude : 0,
//             longitude: 0
//         }
//         callback(data)
//     },2000)
// }

// geocode('Senador Canedo',(data)=>{
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add=(x,y,callback)=>{
    setTimeout(()=>{
        const result = x+y
        callback(result)
    },2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

