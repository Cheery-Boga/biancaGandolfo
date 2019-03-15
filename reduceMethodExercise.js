/** Learn how to use "functional-utility methods" to transform lists into something more usabable.

case study: 

as a front-end developer, you will often be working with an API that gives you data in a format that you can't use, so you have to tranform it into some meaningful and useful. 

Or, perhaps, convert the data that would work better for how your UI is arranged; particularly, if you work with JSON data.

In the following exercise, we're suppose  to extract the room in which nobody was present. it's NOT working! **/

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const notInRoom = suspects => {
    const emptyRooms = reduce(suspect.rooms, room, memo) {
        if (room === false) memo.push(room); 
        return memo;
    }, []; 
    return emptyRooms; 
}


notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms); //loDash method library
