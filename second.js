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



