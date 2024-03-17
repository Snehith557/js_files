console.log("This is my first js code");

// setTimeout(()=>{
//     alert("This is my first alert")
// },5000);


// variables 
var num = 10;
different = 20;
name_ = 20;

// variable declaration happens in multiple ways
// we either use var let or const
// if we dont specify it is any by default
console.log(typeof(name_))


// variables in js
// int ,float,null and undefined boolean/bool
// null vs undefined
// undefined means that the variable has been declared but not assigned 
// null is an assigned value , i.e the element is been given the value null
// different data types in js
// there are 7 primitive data types
// number string int 
// int is a whole number but cannot be a float
// number can either be a float and an int


// var let and const 

// var can be redeclared and updated has a global scope 
// let can be declared only once but can be updated  has a block scope
// let need not be iniitalized 
// const can be declared only once and cannot be updated has a block scope


// create a const object called "product" to store some info


// a product object
const product ={
    product_name: "new_pen",
    rating:4.1,
    price:999
};

// setTimeout(() => {
//     console.log(typeof(product))
    
// }, 2000);


// comments single line comments

// operators
// + - * /
// comparision operators
// == just check if both are equal ireespective of the type
// === value + type # stricter version of == 
// != check only for the values
// !== check for both the value and type  # stricter version of !=  
// all the short-hand notations are valid   


// documentation  for js
// mdn morzilla developer documentation

// usage of prompt 
// window.prompt("HI this is a new piece of code");
// console.log(typeof(prompt("enter the number present here ",100)));
setTimeout(() => {
    
    let value = prompt("Enter the number");
    if(Number(value) % 5 !== 0){
        alert("value not a multiple of 5");
    }
    else{
        alert("Great");
    }
    
}, 2000);
// https://www.youtube.com/watch?v=VlPiVmYuoqw&t=1214s