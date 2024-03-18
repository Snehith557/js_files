// creating loops

// for loop

// for(let i = 0;i< 10;++i){
//     console.log("printing inside the loop");
//     console.log(i);
// }

// while loop

// while(iterator or some condition){
    // do the thing
    // iterator
// }

// do while would run atleast one time
// do while(){

// }

let value = 10
do {
    console.log("inside the do while loop");
    value++;
}while(value <=10)

// iterating on some special data types

// for-of loops
// for-in loops




// for of loops used for iterating on arrays and strings similar to auto : array

// syntax for of loop
// ideally should not be used for objects
// for(let iter of datatype){
//     // do something
// }

let new_string = "this is a string"
// for(character of new_string){
//     console.log(character);
//     // crossOriginIsolated.l
//     console.log("\n");
// }

// for in loops for using objects
// object ex
let student = {
    name:"manu",
    age:21,
    gpa:9,
    isPass:"yes"
}

// for of on objects will give error
// object cannot be iterated
// for in gets the keys on the objects

for(let i in student){
    console.log();
    console.log(i+":"+student[i]);
}


// strings 
// strings are immutable


// in js template literals or string formatting can also be done
// name = "mark"
// console.log("his name is ",${name})
// console.log(`his name is ${name}`)
// used for string interpolation // basically a placeholders 

// string built in methods
// all of the strings will never change the original string and returns the modified string
var new_string_1 = "this is a string"
console.log(new_string.toUpperCase()) // toUpperCase returns a modified string as output



// trmi :: nice  method
// removes the white spaces in the edges

var trimmer = "      this a trimmer                 "
console.log(trimmer)
console.log(trimmer.trim())

// slice str.slice
// str_1.concat(str_2)
// str.replace(search_val ,new_val)
// str.charAt(index )