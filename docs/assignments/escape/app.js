// 1. Require the readline-sync package
const readline = require('readline-sync');

// 2. Welcome the player
const playerName = readline.question('What is your name? ');
console.log(`Welcome, ${playerName}, to the Escape Room!`);
console.log(
    'You find yourself locked in a dark room. You must find the key to escape.'
);

// 3. Set up game state variables
let isAlive = true;
let hasKey = false;

// 4. Start the game loop
while (isAlive) {
    // Use keyInSelect to give the player numbered options
    const choice = readline.keyInSelect(
        ['Put hand in hole', 'Find the key', 'Open the door'],
        'What do you want to do?'
    );

    // 5. Handle the player's choice
    if (choice === 0) {
        // Player chose "Put hand in hole"
        console.log(
            '\nYou put your hand in the dark hole and feel a sharp pain. It was a trap! You have died.'
        );
        isAlive = false; // End the game
    } else if (choice === 1) {
        // Player chose "Find the key"
        if (hasKey) {
            console.log("\nYou've already found the key. It's in your pocket.");
        } else {
            console.log(
                '\nYou search the room and find a small, rusty key under the rug.'
            );
            hasKey = true; // Update game state
        }
    } else if (choice === 2) {
        // Player chose "Open the door"
        if (hasKey) {
            console.log(
                '\nYou use the key to unlock the door. The door creaks open and you are free! Congratulations, you have escaped!'
            );
            isAlive = false; // End the game
        } else {
            console.log(
                '\nThe door is locked. You need to find the key first.'
            );
        }
    } else if (choice === -1) {
        // Player canceled the prompt
        console.log('\nYou decide to give up. Game over.');
        isAlive = false;
    }
}
