// functions


// syntax
// function func_name(params_1,params_2,.....){

//     return 
// }
// function parameters have a block level scope
// if a variable is not defined using either of var , let or const it will have a global 
// scope
// var uses hoisting 
// const and let doesnt use hoisting



let new_function = function(){
    // w/o a scope specifier variables will have a global scope
    new_val = 10;
    console.log("this is my first function");
}


new_function();
console.log(new_val);

// arrow functions
// arrow functions are used to write small functions but not for a funtion does something important
// easier/compact way of writting a function

// Normal way
function func_1(a,b){
    return a+b;
}

// easier way without using function keyword something like that
let func_2 = (a,b)=>{
    return a+b;

}


// SubmitEvent()
// easier way 
// we have declared a function by wont be able to use it 
// we need to give it a name
// (c,d) => {
//     return c^d;
// }

// function func_3
let func_10 =(c,d) => {
    return c^d;
}

console.log(func_10);
console.log(typeof(func_10)); 
func_10 = 10;
console.log(func_10);
console.log(typeof(func_10)); 


// console.log(typeof(func_10)); will print a type of function


let string = "AEIOUSNEHTIHtHISmy first code"
// 
let print_vowerls = (param)=>{
    let vowels = ['A','E','I','O','U'];
    
    // python  version of (in) an array in js is includes
    for(let i of param){
        if(vowels.includes(i.toUpperCase() )){
            console.log(i);
        }
    }
}


print_vowerls(string);