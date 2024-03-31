// call_backs
// passing a function as an argument to another function is called an callback
// passing a function as an argument where the recepient function can use the passed function 

function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}


function calculator(a,b,func){
    let result = func(a,b);
    console.log(result);

}


setTimeout(()=>{
    console.log(add(3,3));
}, 3000);
setTimeout( 4000);

// a reference to the function as to be passed

// calculator(5,6,add);
// calculator(5,6,mul);


// callback hell :-  nested callbacks stacked  below one another forming  a pyramid structure (pyramid of doom)
// can be harder to manage the code



// hence we have something called promises to solve the problems related to nested callbacks/callback hell
// 