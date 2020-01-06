// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(-5))

const event ={
    name : "Party !!",
    guestList: ['a1','b2','c2'],
    printGuestList() {
        console.log("Guest for "+this.name)
        this.guestList.forEach((guest)=> {
            console.log(guest + ' is attending '+ this.name )  
        })
    }
}
event.printGuestList()