// EX1

// var info = {
//     name: "Mostafa",
//     phone: "01060507172",
// }

// assign method copies all properties from object to target object
// var returnedInfo = Object.assign({}, info)
// console.log(returnedInfo)

//create method creates a new object ,using an existing object as prototype
// var createObj = Object.create(info)
// console.log(createObj)

// keys() returns array of object's keys
// console.log(Object.keys(info))

//values() returns array of object's values
// console.log(Object.values(info))

//entries() returns array of object's keys and values
// console.log(Object.entries(info))

//freeze() makes existing properties non-writable and non-configurable
// Object.freeze(info)
// info.name = "khamis"
// console.log(info.name)  //mostafa

// is() determines whether two values are the same value
// console.log(Object.is(info.name, "Mostafa")) // true

//isFrozen() determines if object is frozen
// console.log(Object.isFrozen(info)) 

//preventExtensions() prevents new properties from being added to an object and object prototype
// Object.preventExtensions(info);
// Object.defineProperty(info, "property1", {
//     age: 22
// }); //return error

//isExtensible() determines if object is extensible
// console.log(Object.isExtensible(info))

//################################################################

// EX2

var names = ["Mostafa", "Khamis", "Hassan", "Ewees"]

//push() add new value to the end of array
// names.push("Mohamed", 2)
// console.log(names)

//pop() remove value from array
// names.pop()
// console.log(names)

//concat() merge two or more arrays
// var names1 = ["Mahmoud", "Rouqia"]
// console.log(names.concat(names1))

//reverse() reverse the order of array
// console.log(names.reverse());

//indexOf() returns the index of passed value
// console.log(names.indexOf("Mostafa"))

//includes() checks if passed value is in array or not
// console.log(names.includes("Mostafa"))

//slice() returns sliced array from the index passed in the function
// console.log(names.slice(2))

// sort() returns sorted array 
// console.log(names.sort());

//join() returns string of array values with specified separator
// console.log(names.join(" "))

// shift() removes the first element from the array and return it
// console.log(names.shift());

//################################################################

// EX3

// function outerFunction(x) {
//     function innerFunction(y) {
//         return x + y
//     }
//     return innerFunction
// }

// var closure = outerFunction(10)
// var result = closure(5)

// console.log(result);