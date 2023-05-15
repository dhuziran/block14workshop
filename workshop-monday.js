// Problem 1

// Make a function that accepts one parameter which is the array of numbers. 
// Then create a new empty array this is where the odd numbers will be stored.
// Loop through the original array
// If the current index number mod 2 is not euqal to zero add it to the new array
function onlyOdds(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(onlyOdds([2, 4, 6, 8, 11, 20, 15, 22]))
console.log(onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(onlyOdds([70, 42, 55, 81, 21, 91, 34]))
console.log(onlyOdds([2, 4, 6, 8, 10, 11, 12] ))

// Problem 2
// I used .split() method to split the string into an array
// Then created a counter for vowels and consonants
// Loopeed through the array and depending on what the letter was i added one to vowel or consonant

function vowelVConsonant(word){
    let arr = word.split('')
    let vowel = 0
    let consonant = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
            vowel++
        }else{
            consonant++
        }
    }
    console.log(`${word} has ${vowel} vowels and ${consonant} consonants`)
}

vowelVConsonant("hello")
vowelVConsonant("ukelele")
vowelVConsonant("awesome")
vowelVConsonant("onomonopia")
vowelVConsonant("textbook")

// Problem 3
// I made a function and used the .reverse() method to reverse the array

function reverseArray(arr){
    console.log(arr.reverse())
}

reverseArray([1, 2, 3])
reverseArray([1, 3, 5, 7, 9, 11])
reverseArray([20, 50, 30, 60, 200])
reverseArray([1, -1, 2, -3, 5, -8, 13])

// Problem 4
// I looped every number from 1 to 100
// Then I used if statement to see if it was a multiple of both 3 and 5 or just one of them
// depending on what number i printed fizz, buzz or fizzbuzz
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        }else if(i % 5 == 0){
            console.log('Buzz')
        }else if(i % 3 == 0){
            console.log('Fizz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz()