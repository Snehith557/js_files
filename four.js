// DOM AND DOM MANIPULATION
// three musketeetrs of web development
// HTML     CSS     JS
// SKELETON DESIGN  LOGIC
// DOM      document object model
// we can access all the elements that are written in the html by js
// i.e browser creates the DOM of the webpage
// all the code in html is converted into an object form in javascript that object 
// is called the document which belongs to window
// so document is an sub object of the window
// console.dir()    is used to print the objects

// document is the model representation of the html called DOM
// each element in the html is called a node and is an object

// NOTE 
// the reason that the script is loaded in the last of the body is that
// to get all the elements
// if we load the script in the begining of the body or in the head all the html data elements that come 
// after the script will not be accesable

// console.dir(document.body.childNodes[5])
// console.dir(document.body.childNodes) gives all the elements that are present in the body field

// console.log(document.getelementby(id class tag others))


//  getting an element by id class and tag
// element by id :- document.getElementbyid("id_name")
// element by class :- document.getElementbyClassName("class_name")
// element by tag :- document.getElementByTagName("tag_name") say p


// NOTE ID CAN BE possed by only one element
// but a multiple elements/tags can be the part of a single class

console.log("printing the class element")
var class_element = document.getElementsByClassName("java_script_class")
// html collection contains an array of elements
// getElementbyClassname returns an html collection/array which will contain all the elments of the class
// console.log(class_element)
// console.dir(class_element)
// var header = document.getElementById("header")
// console.dir(header)
// console.log(header)
// console.log(header.innerHTML)


// recognising the id's we use # for styling in the css
// for classes we use .


// better way of accessing the elments is by using querySelector
// i.e we can pass any send any type of tags like class , id or a tag queryselector 
// will directly identify the element that we are looking for and returns the data


// example

var elements = document.querySelector("div") ; // returns the first match of the tag
console.dir(elements)

// to get all the elements in the html we need to use querySelectorAll

var elements = document.querySelectorAll("div") ; // returns the first match of the tag
console.dir(elements)
// returns a nodes list
// if we want to    query select a class we need to put . and class name
var elements = document.querySelectorAll(".java_script_class") 
// similarly for ids we need to use #
console.log(elements)

