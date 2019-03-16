/** under the hood, we're returning nested functions, when using currying. 
**/

const curry = function => { // abc
    return arg => { // 1
        return arg2 => { // 2
            return function(arg, arg2); 
        }
    }
};

var abc = function(a,b) {
    return [a,b]; 
}; 

var curried = _.curry(abc); 

curried(1)(2); 
// -> [1,2]


/**under the hood, we're returning arrays, when using compose method.

**/

const compose = (fn1, fn2) => {
    return (arg) => {
        const result = fn2(arg); 
        return fn(result); 
    }; 
}; 

