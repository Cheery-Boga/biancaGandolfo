/** Closure Recipe:

1. create your parent function
    ex: the checkscope function;

2. define some variables in the parent's local scope, which will be accessed by the child function.
    ex: var innerVar = "local scope";

3. define a function inside the parent function. We call this a child. 
    ex: the innerFunc function; 
    
4. return that child function from inside the parent function.
    ex: where it says, "return innerFunc"; 
    
**/

const checkScope =() => {
    const innerVar = "local scope"; 
    function innerFunc() {
        return innerVar; 
    };
    return innerFunc; 
}

/** Execution of Closure

1. run parent function and save to a variable. This variable will hold whatever that function RETURNS
    ex: var test = checkScope();
    
2. optional: check what that variable holds as its value. (Hint: it should be the inner function)
    ex: test; (the console log should return a function definition)
    
3. run the inner function by adding the parenthesis
    ex: test(); // -> [Function: innerFunc]
    
4. what happens when you invoke test? 
/ - > ???   :-)
 
 https://repl.it/@MarthaChiriboga/ScopeRecipe
 
 ____________________________
 
 **/

https://repl.it/@MarthaChiriboga/findSomeoneSpeak

const findSomeone = () => {
  const speak = () => {
    console.log(who);
  }; 

  let who = `Well hello, Professor Plum!`; 

  return speak; 
}; 

let memo = findSomeone(); 
memo(); 

/** you would initially think that this would return undefined, because the 'who' variable was visibly declared after the 'speak' function.

But, you must remember that line 46 was just a function declaration, not an invocation! So, after 'speak' was defined and stored, the JS compiler went to the next line 50 and placed the 'who' variable in the scope as a variable declaration. 

then when line 56 invokes the speak function. Speak first looks for the who variable in the console.log in its local scope, since it doesn't find it...it will go searching for a 'who' variable declaration in its parent scope, at which point it finds it and returns the string, "Well hello, Professor Plum!", because it's valid and execution.

That's why it's important to understand how a function executes and in what order; especially, when you're return functions from functions. 

**/




    