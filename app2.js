// classes in javascript
// classes gives us a template for creating a new object of similar type
// and it is also an user defined datatype

// Those objects will have some state/variables/properties and some methods/functions associated

// syntax for defining a class

// class MyClass{
//     constructor(){

//     }
//     methods(){

//     }
// }

// let my_new_obj = new MyClass();


class TataCar{

    // car_name : "NexonCar",
    // let car_name = "Nexon"
    constructor(){
        let car_name = "Nexon"
        let Wheels = 4
    }
    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop car");
    }

}


// in js the variables can directly belong to an object or a class
// i.e the class variable and object variable

// all the class variables should be initialized in the constructor and the object variables can be initialized in 
// their respective functions

// example



class NewCar{

    // class variables
    constructor(brand_name,model_name){
        this.brand_name = brand_name; //  a variable called brand_name and model_name will be created
        this.model_name = model_name; //  a variable called brand_name and model_name will be created
    }

    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop car");
    }


}


class NewCarDiff{

    // class variables
 
    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop car");
    }

    diffBrand(brand){
        this.brand = brand;
    }

}

let car1 = new NewCar("Tata","Nexon");
let car2 = new NewCarDiff();
let car3 = new NewCarDiff();
car2.diffBrand("Weird_Car");
console.dir(car1)
console.dir(car2)
console.dir(car3)


let car10 = new NewCar("Tata");
// if we dont send required number of arguments it will become an undefined
console.log(car10)
// 