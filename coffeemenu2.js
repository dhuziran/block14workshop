const menu = require('./coffeemenu1.js')

function drinks(arr){
    console.log("Drink List:")
    let drinkList = []
    for(let i = 0; i < arr.length; i++){
        drinkList.push(arr[i].name)
    }
    console.log(drinkList)
}

function cost(arr){
    console.log('Drinks under 5 Dollars:')
    let costList = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price <= 5){
            costList.push(arr[i].name)
        }
    }
    console.log(costList)
}

function evenNumDrinks(arr){
    console.log('Drinks with even number price:')
    let list = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price % 2 === 0){
            list.push(arr[i].name)
        }
    }
    console.log(list)
}

function total(arr){
    console.log('Total price of all drinks')
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        answer += arr[i].price
    }
    console.log(answer)
}

function seasonal(arr){
    console.log('Seasonal Items:')
    for(let i = 0; i < arr.length; i++){
        if(arr[i].seasonal){
            console.log(`${arr[i].name} with imported beans`)
        }
    }

}

drinks(menu)
cost(menu)
evenNumDrinks(menu)
total(menu)
seasonal(menu)