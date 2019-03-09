// var person = []; 
// person.name = "Mrs. White";  
// var who = person.name; 
// who;

// person["0"] = 'I was not in the Billiards room'; 

// console.log(person)

//we initialized the variable with an object literal
// let clue = {};
// clue.rooms = ['parlor', 'billard room', 'conservatory'];

// clue.weapons = ['candlestick', 'lead-pipe', 'gun'] ;

// clue.name = ["Mrs. White"];

// clue.name.push("Mr. Fuzz")

// console.log(clue);

// ES6 Destructioning 

// var obj = {
//   first: "Dan",
//   last: "Coelho"
// }

// var first = obj.first;
// var last = obj.last;

// console.log(first, last)

//the ES6 Destructioring for object has to have the exact same name of the key as the variable names when declairing the const! 

//The cool part is that as long as it has the key-name, it doesn't have to be in order inside the const declaration (as illustrated below)

// const {second, first} = {first: "Dan", second: "Coehlo"};
// console.log(first);
// console.log(second);

// const [first, second] = ['first element', 'second element'];
// console.log(first);
// console.log(second);

// Object.freeze() method freezes the key/value pairs inside an object, but doesn't throw an error message. It will simply not make the re-assigment. 

// const x = {name: "Martha", last: "Chiriboga"}; Object.freeze(x);
// x.name = "Silvia";
// x;

//Object.freeze() starts with a capital O. 

// const myObj = {first: "Nancy", last: "Drew"};
// const {first, last} = myObj;
// console.log(first, last);

//Object Exercises

// const {name, room, weapon} = {name: 'Rusty', room:'kitchen', weapon: 'candlestick'};

// console.log(room, weapon);

//swap variables with and without a "temp" variable;

// let a = 1, b =2;
// b === 2 and a === 1; how to do it?

//using temp;

// let a = 1, b =2;
// let temp = a; 
// a = b; 
// b = temp; 
// console.log(a,b);


// using ES6 Destructioring;
// let a = 1, b =2;
// [a,b] = [b,a];
// console.log(a,b);