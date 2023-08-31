//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [22,22,33,44,55]
// let addition = 0;
// arr.forEach((x)=> addition +=x )
// alert(addition)
//or another way of addition 
alert(arr.reduce((acc,c) => acc + c,0))
//Create a function that takes in an array of numbers
// function takeArray(nums){
//     let newArr = []
//     //Return a new array of numbers that is every original number squared
//     nums.forEach((x) => newArr.push(x*x))
//     alert(newArr)

// }
// takeArray([5,6,7,7,8,9])
let newArr = arr =>arr.map(n => n**2)
alert(newArr)


//Create a function that takes string
function takeString(str){
    //Print the reverse of that string to the console
    let newString = alert(str.split("").reverse().join("") )
 
}
takeString('the topice of my speach is nothing venture nothing have')


//Create a function that takes in a string
//Alert if the string is a palindrome or not
