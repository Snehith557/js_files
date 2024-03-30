// EVENTS AND EVENT HANDLING
// The change in the state of an object is called an event
// any change that is created by an user or by a function as a response to something
// can create an event which can result in the execution of code flow
// triggering something basically
// mouse event,clicking an button ,hitting a button, etc anything that creates a 
// change in the code flow 

// let prompt_val = prompt("Enter a value")
// alert("Hi click here")

let button_event = document.querySelector("#button-elm")
button_event.addEventListener("click",(e)=>{
    alert("button was clicked");
})

// console.log("inside")
let box_event = document.getElementById("box-elm");
console.dir(box_event)
box_event.addEventListener("click",(e)=>{
    alert("one the div element");
})


let theme_element = document.getElementById("theme-elm");
console.dir(theme_element)

theme_element.addEventListener("click",(e)=>{
    if (document.body.bgColor === "black"){
        document.body.bgColor = "white";
    }
    else{
        document.body.bgColor = "black";
    }
})

// theme_element.addEventListener("ondblclick",(e)=>{
//     // get the background color of the page and change it
//     console.log("inside the button");
//     document.body.bgColor = "white";

// })


// remove event listners
// say we need to remove some functionality after we have clicked  something
// example would be after clicking the submit button has to be frozen





// changing the background color of the page


// let boxelement = document.querySelector("#smallbox")
// console.dir(boxelement)

// change_back_ground_color = ()=>{
//     console.log("inside the function");

// }
// // by calling the function
// // boxelement.onmouseover = change_back_ground_color // i am just calling the function here to access this
// // by adding event listners

// boxelement.addEventListener(onmouseover,change_back_ground_color)


// inline vs js-code
// the functions written in js code is given more priority than the inline functions

// event object
// this event object basically has all the data/ information about the respective event
// like where the screen was pressed the cordinates etc
// e the value passed to the call back is the event object


// EVENT LISTNERES
// WHICH listens for the events of a particular node and executes the respective code
