// generally in js async await is better than promise chain is betterthan callbackhell

// Sync in js
// basically execution of code in a particular sequence of code in which the next sequence waits for the previous steps 
// to get completed which in sequence
// synchronous code

// console.log("one")
// console.log("two")
// console.log("three")

// asyncronous
// one of the disadvantage of synchronous programming is that is stops the flow of code
// or the instructions will only be executed if the present instruction completes its execution
// which some times can cause performance issues or delay in UI

// Asyncronous mode of execution allows us to write non-blocking code
// the easiest example of async function in js is setTimeout() this executes after the timeout expires
// but the code cannot wait for the timeout to complete hence it runs it parallely


console.log("Hello");
setTimeout((e) => {
    console.log("inside timeout");;

    
}, 3000);

console.log("Hello+1");


// out put
// promise.js:22 Hello
// promise.js:29 Hello+1
// promise.js:24 inside timeout


// here hello and hello+1 are prinited simulatenouly 
// but inside timeout takes 3 seconds to getprinted
// which means async the timeout function did not stop the further execution

// here setTimeOut is similar to an api call






