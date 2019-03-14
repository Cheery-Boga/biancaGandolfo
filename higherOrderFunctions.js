/** functions are data, in Js. We can pass functions around; i.e.,  we can return them without invoking them. Really, high-order functions and callbacks are the core concepts of functional programming. That's really powerful!

**/

// the following snippet is how a programmer creates a functional-style, "if/else statement":

const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue: isFalse;
};

ifElse(true, 
      () => { console.log (true);},
      () => { console.log (false);}
      );

//this returns the function declaration for isTrue, since it's being passed to isTrue. the console.log isn't printing, because isTrue hasn't been invoked. 

//if you want the invokation, then add the parenthesis to the tenerary statement on line 8:

const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue(): isFalse();
};

ifElse(true, 
      () => { console.log (true);},
      () => { console.log (false);}
      );

//now, what gets returned is what's inside the console.log.

//the following snippet demonstrates a high-order functoin take in a parameter and a callback function: 

increment = function (n) { return n+ 1; };
square = function (n) { return n * n; }; 

const doMyCalculationsForMe = function (n, func) { return func(n) };


//below is the identical solution translated into ES6:

const increment = n => {return n + 1; }; //the explicit return with the curly braces is NOT necessary, but Bianca recommends that we use it for our own sanity. 
const square = n => { return n * n; };  
const doMyCalculationsForMe = function (n, func) { return func(n) };

doMyCalculationsForMe(3, increment);
doMyCalculationsForMe(5, square);

//how to pass arguments into a callback function

const ifElse = (condition, isTrue, isFalse, parameter) => {  //you pass it in its scope. 
    return condition ? isTrue(parameter): isFalse(parameter);
};

ifElse(true, 
      () => { console.log ('Hi');},
      () => { console.log ('Hi');}, 
       "Hi" // in this case the fourth paramater is a placeholder for the string/argument for, 'Hi'. 
      );

//call/apply/bind are cool methods worth looking into it. Bianca doesn't cover this for this basic class.'

