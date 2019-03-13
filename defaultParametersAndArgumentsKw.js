//default parameters and the arguments keyword. 
//the args kw will NOT recognize any default parameters in ES6. 
//it will only pick-up on any of the arguments that are passed in; thus, completely ignoring the parameters as declared in the function expression below:

const add = function(a, b=2) {
  console.log(arguments); 
  return a + b; 
};

add(3);

// -> [Arguments] { '0': 3 }
=> 5

//How did we write a default parameter in ES5? 
//
//We did it this way:

const add = function (a,b) {
    b = b || 2; //this is saying, if B is equal to B (it exists), then jump out of this line and go on to next line. If B doesn't exist, then B is equal to 2; 
    
    //As an aside, if the statement said "b = b && 2" ; //this is saying if B exist, then make it equal to 2.
    
    console.log (arguments); // this still logs (3)
    return a + b; 
}

add(3); 

// -> [Arguments] { '0': 3 }
=> 5