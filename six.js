// DOM MANIPULATION 2
// ATTRIBUES AND STYLE
// Attributes basically the attributes/features of an element
// say div element may have some other features 
// getAttributes(attr)  will give all the attributes value of a particular element

let div_element = document.querySelectorAll("div"); // this basically gives the element node
console.dir(div_element);

// getAttribute function returns the value of the particular attribute that we are 
// quering for 

for(let div_id_name of div_element){
    console.log(div_id_name.getAttribute("id"));
}
// let div_id_name = div_element.getAttribute("id");


// style attribute
// node.style
// query the style and access the style as in 


