const constructArr = function () {
    const arr = Array.prototype.slice.call(arguments); 
    
    arr.push('the billiards room?'); 
    
    return arr.join(' '); 
}

constructArr('was', 'it', 'in'); 

// -> was it in the billiards room?

//the following will console.log what happens in each step of the way: 

const constructArr = function () {
  console.log(arguments); // returns an object that resembles an array;
    const arr = Array.prototype.slice.call(arguments); 
    console.log(arr); // this now returns an array-like object as an actual, real array;
    arr.push('the billiards room?'); 
    console.log(arr); // this has the billiards room? pushed to the back of the ${arr} array; 
    return arr.join(' ');  // this joins the strings in the array and seperates them by an empty string. returns one string as it gets rid of the array brackets.
}

constructArr('was', 'it', 'in'); 

/***

___________________________________   ARRAY.FROM()    __________________________________________


Remember how in line 17, Array.prototype.slice.call(arguments), converted an array-like object into a real object? Well, Array.From(arguments), in ES6, does the same thing!

const constructArr = function () {
  const arr = Array.from(arguments);
  arr.push('the billiards room?'); 
  return arr.join(' ');

}

We use the Array.from(), in ES, when we want access to the native JS methods of .push() and .join(). 


**/

const from = function (object) {
    let arr = []; 
    for (let key in object) {
        let value = object[key];
        arr.push(value);
    }
    return arr; 
}

//recreating the Array.from() method from scratch (under the hood):

const from = function (object) {
    let arr = []; 
    for (let key in object) {
        let value = object[key];
        arr.push(value);
    }
    return arr; 
}

from({0:"I", 1:"Love", 2:"you"});



