//
//Functions
//
//data === you can either change data or share, but don't mutate it. 
//documentation is structured very similarly. Once you get the hang of it, you'll start to read the source code of your favorite libraries and the language spec. You're life becomes so much better.
//one of the most things to know about JS is to know what could go wrong. This will help you write bug-free code. 
//one of the ways that you can tell something is a function is it's immediately followed by open/close parentheses:
//
//console.log();
//$(this is a Jquery parameter); / - > returns a node
//.hide();


const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// We created a variable "suspects" to store the return value of that _.filter function, so that we can use it in our _.map function below:

const suspects = _.filter(videoData, function(suspectsObject){
       return suspectsObject.present; 
       
       });

/** the suspects variable holds the following array of objects, which we will pass unto the _.map function, below, to extrapolate just the names as strings. 


(4) [{…}, {…}, {…}, {…}]
0: {name: "Miss Scarlet", present: true, rooms: Array(6)}
1: {name: "Reverend Green", present: true, rooms: Array(6)}
2: {name: "Colonel Mustard", present: true, rooms: Array(6)}
3: {name: "Professor Plum", present: true, rooms: Array(6)}
length: 4

**/

const suspectsName = _.map(suspects, suspect => {return suspect.name;} )

/**  The last statement on line 108, returns the names of the suspects as strings, inside an array:

["Miss Scarlet", "Reverend Green", "Colonel Mustard", "Professor Plum"]
0: "Miss Scarlet"
1: "Reverend Green"
2: "Colonel Mustard"
3: "Professor Plum"
length: 4

**/



