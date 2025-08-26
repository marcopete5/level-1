const readlineSync = require('readline-sync');

// Player Constructor
function Player(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.kills = 0;
}

// Enemy Constructor
function Enemy(name) {
    this.name = name;
    this.health = 50;
}

// Enemy names array
const enemies = ['Skeleton Pirate', 'Navy Officer', 'Sea Monster'];

// Game variables
let player;
let gameRunning = true;

// Story Point 82: Fun greeting message
function greetPlayer() {
    console.log('🏴‍☠️ Welcome to Pirates Adventure! 🏴‍☠️');
    console.log('Ahoy! Ready to become a legendary pirate?');
    console.log('Defeat 3 enemies to win!');
    console.log('');
}

// Story Point 83: Get and store player name
function getPlayerName() {
    const name = readlineSync.question('What is your pirate name? ');
    return name;
}

// Story Point 87: Walking with random encounters (1/3 chance)
function walk() {
    console.log('You walk along the beach...');

    // Random encounter - 1/3 chance
    if (Math.random() <= 0.33) {
        console.log('⚠️ An enemy appears!');
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        const enemy = new Enemy(randomEnemy);
        battle(enemy);
    } else {
        console.log('The path is clear.');
    }
}

// Story Point 93: Combat system
function battle(enemy) {
    console.log(`A ${enemy.name} challenges you!`);

    // Battle loop until someone dies
    while (player.health > 0 && enemy.health > 0) {
        console.log(`Your health: ${player.health}`);
        console.log(`Enemy health: ${enemy.health}`);

        const choice = readlineSync.question('Do you (a)ttack or (r)un? ');

        if (choice === 'a') {
            // Player attacks
            const damage = Math.floor(Math.random() * 20) + 10; // 10-29 damage
            enemy.health -= damage;
            console.log(`You attack for ${damage} damage!`);

            if (enemy.health <= 0) {
                console.log(`You defeated the ${enemy.name}!`);
                player.kills++;
                player.health += 10; // Heal after victory
                player.inventory.push(`${enemy.name} Trophy`);

                if (player.kills >= 3) {
                    console.log(
                        '🏆 VICTORY! You are now a legendary pirate! 🏆'
                    );
                    gameRunning = false;
                }
                return;
            }

            // Enemy attacks back
            const enemyDamage = Math.floor(Math.random() * 15) + 5; // 5-19 damage
            player.health -= enemyDamage;
            console.log(`${enemy.name} attacks for ${enemyDamage} damage!`);
        } else if (choice === 'r') {
            // Try to run - 50% chance
            if (Math.random() <= 0.5) {
                console.log('You escaped!');
                return;
            } else {
                console.log('Could not escape!');
                // Enemy gets free attack
                const enemyDamage = Math.floor(Math.random() * 15) + 5;
                player.health -= enemyDamage;
                console.log(
                    `${enemy.name} attacks while you try to flee for ${enemyDamage} damage!`
                );
            }
        }
    }

    // Check if player died
    if (player.health <= 0) {
        console.log('💀 You died! Game Over! 💀');
        gameRunning = false;
    }
}

// Story Point 97: Inventory system
function showInventory() {
    console.log('=== INVENTORY ===');
    console.log(`Name: ${player.name}`);
    console.log(`Health: ${player.health}`);
    console.log(`Enemies Killed: ${player.kills}/3`);
    console.log('Items:');

    if (player.inventory.length === 0) {
        console.log('  No items');
    } else {
        player.inventory.forEach((item) => {
            console.log(`  - ${item}`);
        });
    }
    console.log('');
}

// Main game loop
function gameLoop() {
    while (gameRunning && player.health > 0) {
        const action = readlineSync.question(
            'What do you want to do? (w)alk, (p)rint inventory, (q)uit: '
        );

        if (action === 'w') {
            walk();
        } else if (action === 'p') {
            showInventory();
        } else if (action === 'q') {
            console.log('Thanks for playing!');
            gameRunning = false;
        } else {
            console.log('Invalid choice!');
        }
        console.log('');
    }
}

// Start the game
function startGame() {
    greetPlayer(); // Story Point 82
    const name = getPlayerName(); // Story Point 83
    player = new Player(name);

    console.log(`Welcome aboard, Captain ${name}!`);
    console.log('');

    gameLoop(); // Story Points 87, 93, 97
}

// Run the game
startGame();
