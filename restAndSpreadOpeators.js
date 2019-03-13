// a Tuple is a data structure that has a collection of arrays that has only two (2) values. 

const createTuple = (a, b, c, d) => {return [[a, c], [b, d]]}; 

createTuple('It', 'be', 'could', 'anyone', 'noone');

//-> [ [ 'It', 'could' ], [ 'be', 'anyone' ] ]

//the rest operator must be for the last, formal parameter. It gathers all the remaining arguments and puts them in an array. See below's output. In the example below, we don't have a "e" mapped to the string, 'noone', so the rest operator will account for that variable and include it in an array in the output along with the string that's mapped to the "c" parameter (on line 11). See below's example: 

const createTuple2 = (a, b, c, ...d) => {return [[a,c], [b,d]]}; 

createTuple2('It', 'be', 'could', 'anyone', 'noone')

// ->   [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'noone' ] ] ]

/**Arguments keyword is when we don't know how many arguments we're going to get. even if you pass in an extra args and you don't reference it as a parameter, this arguments will return all the elements in what is called a "pseudo-array". 
   A pseudo-array is an object that looks like an array, but it's actually an object. What does that mean? 
   
   it means that we don't have access to our methods, i.e., push, pop, slice, etc....because we're getting an object that looks like an array. So, Array.isArray(arguments) would yield to a false boleean value; 
   
Thus, this argument keyword works ONLY in a function that uses ES5-style function declarations, but NOT with fat arrow functions. **//
    
    const createTuple = function (a,b,c,d) {
    console.log(arguments);
    return [[a,c], [b,d]]}; 

createTuple('It', 'be', 'could', 'anyone', 'noone');

-> console.log results printed in white, on repl.it: [Arguments] { '0': 'It', '1': 'be', '2': 'could', '3': 'anyone', '4': 'noone' }
=> function return printed in green: [ [ 'It', 'could' ], [ 'be', 'anyone' ] ]

// our second example, using the rest operator and as a ES5 function declaration: 

const createTuple2 = function (a,b,c,...d)  {
  console.log(arguments);
  return [[a,c], [b,d]]
  
  }

createTuple2('It', 'be', 'could', 'anyone', 'noone');

-> [Arguments] { '0': 'It', '1': 'be', '2': 'could', '3': 'anyone', '4': 'noone' }
=> [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'noone' ] ] ]

// the arguments keyword has nothing to do with what gets printed as a result of calling the function. it just picks up the values that were pass into the array.