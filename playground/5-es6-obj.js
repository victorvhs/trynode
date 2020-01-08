const name = "Victor"
const userAge = 27

const user={
    name,
    age: userAge,
    location: "Aqui"

}
console.log(user)

//object desctructuring

const product = {
    label:'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label,stock} = product

console.log(label+' '+ stock)