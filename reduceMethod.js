//the following is the code snippet for what actually happens under the hood with the reduce method in JS.

const reduce = function(array, callback, initialValue) {
    let memo = initialValue; 

    for (let i = 0; i < array.length; i++) {

        if (i === 0 && memo === undefined) {
            memo = array[i];
        } else {
            memo = callback(array[i],memo);
        }
    }
    return memo; 
}

reduce([1,2,3], function callback(value, sum) {
       return value + sum; 
       }, 0);