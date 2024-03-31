// promises
// promises are for "Eventual" completion  of task. it is an object in JS
// promises is for "eventfull" completion of a task. it is an object in JavaScript
// is a solution for callback hell

// syntax
// let promise = new Promise((resolve,reject)=>{})
// states of a promise
// resolve
// reject
// unfullfilled ==> still under exectuion



// a promise can be in 
// pending
// fullfilled/resolved
// rejected states
// let promise = new Promise((resolve,reject)=>{
//     console.log("HI i am a Promise");
//     resolve("Success");
// })

// let promise_1 = new Promise((resolve,reject)=>{
//     // console.log("HI i am a Promise");
//     // resolve("Success");
//     reject("Failed");
// })


// promises are used extensively in api calls 
// where in api function call instead of returning a value they return a promise 
// which we take and process


// mimicing an api call which takes 5 seconds to return the data

// function fetchData(Data){
//     return Data+"DataIsReturned";
// }

// i we want to make a call be just pass the function reference
// but if we want to make a function call with some parameters inside setTimeOut we need to use a function

// setTimeout(()=>{
//     let result = fetchData("10");
//     console.log(result);
// }, 5000);

// we fetch Data which is taking  5 seconds
// instead of doing this we at the instance of the api call return a promise and deal with the data


function fetchData(Data){
    return Data+"DataIsReturned";
}

function fetchApiData(Data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let result = fetchData(Data);
            // console.log(result);
            resolve("The data is fetched successfully");
            return result;
            
            // reject("Cannot resolve this request");
        }, 10000);
    })
}



// once a promise is returned
// when it is in pending state we cannot do anything
// but if it is fullfilled or rejected then we can do something


// promise.then() if resolved
// and
//  promise.catch() if rejected



function getPromise(){

    return new Promise((resolve,reject)=>{

        // setTimeout(() => {
            console.log("I am a Promise");
            // resolve("It is 200");
            reject("It is 404");
            
        // }, 3000);
    })

}



// let promise = getPromise();
// // if the promise gets resolved then do something
// promise.then((res)=>{
//     console.log("The promise has been resolved",res);
// })
// promise.catch((res)=>{
//     console.log("The promise has been failed return 404",res);
// })



// some times even if the data is getting fetched asyncronously we need to fetch the data in some order
// say a good example would be 
// when we can to login to an website fetch the username and then the password
// if the username only doesnt exsists raise an exception

//  This process of fetching the data in some async fashion is called promise changing



function asyncFetch1(Data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(Data);
            resolve("200 success");
            // reject(404)
        },3000)
    })
}


function asyncFetch2(Data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(Data);
            resolve("201 success");
        },3000)
    })
}



console.log("From the fetch_1");
let result_1 = asyncFetch1(10);
result_1.then((res)=>{
    console.log("Returned",res);
    console.log("From the fetch_2");
    let result_2 = asyncFetch2(20);
    result_2.then((res)=>{
        console.log("Returned",res);
    })
})


result_1.catch((err)=>{
    alert("Fetch_1 Failed");
})
