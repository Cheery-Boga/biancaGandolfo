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