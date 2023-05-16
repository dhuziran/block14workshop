// Froyo Survey 
// Creating Object
const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih!aol.com',
    phone: undefined,
    zipCode: "631",
    favoriteFlavor: 32,
    cupSize: 'medium',
    favoriteStore: 'target',
    firstVisit: false
}
// updating values
customer.email = 'Jak3Smith1992@gmail.com'
customer.phone = '3195551234'
customer.zipCode = '63132'
customer.favoriteFlavor = ['coffee', 'strawberry', 'matcha']
// deleting pairs
delete customer.zipCode
delete customer.favoriteStore
// adding new key value pairs
customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears']
customer.futureFlavor = 'mango'
customer.todaysPurchaseCost = 5.32
// creating array to place all keys in then lopping through the object and adding the keys into the array
const arr = []
for(const property in customer){
    arr.push(property)
}
console.log(arr)


