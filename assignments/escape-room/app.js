const readline = require('readline-sync');

//start game
console.log('Welcome to the game!');
console.log('You are in a dark room with a hole and a door.');
console.log('There is a key hidden in the room.');
console.log(
    'You must find the key so that you may open the door and escape \n'
);

let doorClosed = true;
let hasKey = false;

// run it on a loop until they win or die
while (doorClosed) {
    // Ask them what action they would like to take
    console.log('Choose your action \n');
    console.log('1. Find the key');
    console.log('2. Open the door');
    console.log('3. Put your hand in the hole\n');

    const choice = readline.question('Enter your choice (1, 2, or 3):');

    // Find the key
    if (choice === '1') {
        if (hasKey) {
            // any subsequent time, tell them they already have it
            console.log('\nYou already have the key.\n');
        } else {
            // first time they do this, give them the key
            console.log('\nYou found the key!\n');
            hasKey = true;
        }
        // Open the door
    } else if (choice === '2') {
        // only open door if they have the key
        if (hasKey) {
            console.log('\nYou opened the door and escaped! You win!\n');
            doorClosed = false;
        } else {
            // otherwise report that it is locked
            console.log(
                '\nThe door is locked. You need to find the key first.\n'
            );
        }
        // put hand in the hole
    } else if (choice === '3') {
        // if they do this, tell them they died and end the game
        console.log('\nYou put your hand in the hole and died. Game over.\n');
        doorClosed = false;
    }
}
