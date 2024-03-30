// creating an object
const student = {
    // properties
    full_name : "Snehith H",
    marks : 99,
    // methods
    print_marks: function(){
        // console.log("inside")
        console.log(this.marks);
    },
    print_name:function(){
        console.log(this.full_name);
    }

}



// java script has a special property called a prototype in every object
// every  object inherits from the prototype object 
// prototype if kind of a master class which has basic methods and some properties
// all the objects inherit some of the basic methods from the prototype object


// creating a prototype
// prototype is a reference to an object

// let this be a generic object
const employee = {
    calc_tax(){
        console.log("tax rate is 10%");
    }
};

// specific employee

const karan = {
    salary :90000
};


// if i want to add/use employee prototype in karan object 
// basically inheriting

karan.__proto__ = employee;

