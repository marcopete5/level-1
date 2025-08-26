const readlineSync = require('readline-sync');

// ASCII Art for dramatic effect
const PIRATE_SHIP = `
    __|__ |___| |\\
    |o__| |___| | \\
    |___| |___| |o \\
   _|___| |___| |__o\\
  /...\\_____|___|____/_\\
  \\   o * o * * o o  /
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

const SKULL_AND_CROSSBONES = `
    .-""""""-.
  .'          '.
 /   O      O   \\
:           \`    :
|                |
:    .------.    :
 \\  '        '  /
  '.          .'
    '-.......-'
    ☠️ ⚔️ ☠️
`;

// Player Constructor
function Player(name) {
    this.name = name;
    this.health = 100;
    this.maxHealth = 100;
    this.inventory = ['Rusty Cutlass', 'Piece of Eight'];
    this.enemiesKilled = 0;
    this.isAlive = function () {
        return this.health > 0;
    };
    this.heal = function (amount) {
        this.health = Math.min(this.maxHealth, this.health + amount);
    };
}

// Enemy Constructor
function Enemy(name, health, minDamage, maxDamage, loot) {
    this.name = name;
    this.health = health;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.loot = loot;
    this.isAlive = function () {
        return this.health > 0;
    };
    this.attack = function () {
        return (
            Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) +
            this.minDamage
        );
    };
}

// Enemy types
const ENEMY_TYPES = [
    {
        name: 'Cursed Skeleton Pirate',
        health: 60,
        minDamage: 8,
        maxDamage: 18,
        loot: 'Ancient Doubloon'
    },
    {
        name: 'Royal Navy Officer',
        health: 80,
        minDamage: 12,
        maxDamage: 22,
        loot: 'Naval Compass'
    },
    {
        name: 'Undead Monkey',
        health: 40,
        minDamage: 5,
        maxDamage: 12,
        loot: 'Cursed Banana'
    },
    {
        name: 'Kraken Tentacle',
        health: 120,
        minDamage: 15,
        maxDamage: 30,
        loot: 'Kraken Ink'
    },
    {
        name: 'Ghostly Buccaneer',
        health: 70,
        minDamage: 10,
        maxDamage: 20,
        loot: 'Spectral Rum'
    }
];

// Game variables
let player;
let isGameRunning = true;

// Utility functions
function displayBanner() {
    console.clear();
    console.log('\x1b[36m%s\x1b[0m', PIRATE_SHIP);
    console.log(
        '\x1b[33m%s\x1b[0m',
        '═══════════════════════════════════════════════════════════════'
    );
    console.log(
        '\x1b[31m%s\x1b[0m',
        '        🏴‍☠️  PIRATES OF THE CARIBBEAN: CURSED WATERS  🏴‍☠️'
    );
    console.log(
        '\x1b[33m%s\x1b[0m',
        '═══════════════════════════════════════════════════════════════'
    );
    console.log();
}

function displayIntro() {
    console.log(
        '\x1b[32m%s\x1b[0m',
        'Ahoy, brave soul! Welcome to the treacherous waters of the Caribbean!'
    );
    console.log(
        '\x1b[37m%s\x1b[0m',
        'The year is 1715, the Golden Age of Piracy...'
    );
    console.log(
        '\x1b[37m%s\x1b[0m',
        'Cursed treasures, undead pirates, and the Royal Navy'
    );
    console.log(
        '\x1b[37m%s\x1b[0m',
        'all stand between you and legendary riches!'
    );
    console.log();
    console.log(
        '\x1b[33m%s\x1b[0m',
        '⚠️  Your mission: Survive the cursed islands and defeat 3 enemies to claim victory! ⚠️'
    );
    console.log();
}

function getPlayerName() {
    let name = readlineSync.question(
        '\x1b[36m%s\x1b[0m',
        'What be yer name, pirate? '
    );
    while (!name.trim()) {
        console.log('\x1b[31m%s\x1b[0m', 'Every pirate needs a name, matey!');
        name = readlineSync.question(
            '\x1b[36m%s\x1b[0m',
            'What be yer name, pirate? '
        );
    }
    return name.trim();
}

function createRandomEnemy() {
    const enemyTemplate =
        ENEMY_TYPES[Math.floor(Math.random() * ENEMY_TYPES.length)];
    return new Enemy(
        enemyTemplate.name,
        enemyTemplate.health,
        enemyTemplate.minDamage,
        enemyTemplate.maxDamage,
        enemyTemplate.loot
    );
}

function displayStatus() {
    console.log('\x1b[34m%s\x1b[0m', '═══ STATUS ═══');
    console.log(`🏴‍☠️ Pirate: ${player.name}`);
    console.log(`❤️  Health: ${player.health}/${player.maxHealth}`);
    console.log(`💀 Enemies Defeated: ${player.enemiesKilled}/3`);
    console.log();
}

function displayInventory() {
    console.log('\x1b[33m%s\x1b[0m', '═══ TREASURE CHEST ═══');
    console.log(`🏴‍☠️ Captain: ${player.name}`);
    console.log(`❤️  Health: ${player.health}/${player.maxHealth}`);
    console.log(`💀 Enemies Defeated: ${player.enemiesKilled}/3`);
    console.log('\x1b[33m%s\x1b[0m', '🎒 Inventory:');

    if (player.inventory.length === 0) {
        console.log("   Empty as Davy Jones' heart...");
    } else {
        player.inventory.forEach((item, index) => {
            console.log(`   ${index + 1}. ${item}`);
        });
    }
    console.log();
}

function playerAttack(enemy) {
    const damage = Math.floor(Math.random() * 20) + 10; // 10-29 damage
    enemy.health -= damage;
    console.log(
        `\x1b[32m⚔️  You strike with yer cutlass for ${damage} damage!\x1b[0m`
    );

    if (!enemy.isAlive()) {
        console.log(
            `\x1b[33m💀 The ${enemy.name} has been sent to Davy Jones' locker!\x1b[0m`
        );
    } else {
        console.log(
            `\x1b[31m${enemy.name} has ${enemy.health} health remaining.\x1b[0m`
        );
    }
    return damage;
}

function enemyAttack(enemy) {
    if (!enemy.isAlive()) return 0;

    const damage = enemy.attack();
    player.health -= damage;
    console.log(
        `\x1b[31m💥 ${enemy.name} attacks you for ${damage} damage!\x1b[0m`
    );

    if (!player.isAlive()) {
        console.log(
            `\x1b[31m💀 Yer health has dropped to ${player.health}. The sea claims another soul...\x1b[0m`
        );
    } else {
        console.log(
            `\x1b[32m❤️  Yer health: ${player.health}/${player.maxHealth}\x1b[0m`
        );
    }
    return damage;
}

function attemptEscape() {
    const escapeChance = Math.random();
    if (escapeChance <= 0.5) {
        console.log(
            '\x1b[33m🏃 You successfully escape into the Caribbean mist!\x1b[0m'
        );
        return true;
    } else {
        console.log(
            '\x1b[31m🚫 The enemy blocks yer escape! No retreat, ye scallywag!\x1b[0m'
        );
        return false;
    }
}

function battle(enemy) {
    console.log(
        '\x1b[31m%s\x1b[0m',
        '⚔️ ═══════════ BATTLE BEGINS ═══════════ ⚔️'
    );
    console.log(
        `\x1b[33mA wild ${enemy.name} appears from the shadows!\x1b[0m`
    );
    console.log(`\x1b[31m${enemy.name} - Health: ${enemy.health}\x1b[0m`);
    console.log();

    while (player.isAlive() && enemy.isAlive()) {
        displayStatus();

        console.log('\x1b[36mWhat be yer action, captain?\x1b[0m');
        console.log('1. ⚔️  Attack with cutlass');
        console.log('2. 🏃 Attempt to flee');

        const choice = readlineSync.question('Enter yer choice (1 or 2): ');
        console.log();

        if (choice === '1') {
            // Player attacks
            playerAttack(enemy);
            console.log();

            // Enemy counter-attacks if still alive
            if (enemy.isAlive()) {
                enemyAttack(enemy);
                console.log();
            }
        } else if (choice === '2') {
            if (attemptEscape()) {
                console.log(
                    'You live to fight another day, but gained no treasure...'
                );
                readlineSync.question('Press Enter to continue...');
                return false; // Battle ended, but no victory
            } else {
                console.log(
                    'Since ye failed to escape, the enemy gets a free attack!'
                );
                enemyAttack(enemy);
                console.log();
            }
        } else {
            console.log(
                '\x1b[31mThat not be a valid action, ye landlubber!\x1b[0m'
            );
            continue;
        }

        // Pause for dramatic effect
        if (player.isAlive() && enemy.isAlive()) {
            readlineSync.question('Press Enter to continue the battle...');
            console.log();
        }
    }

    // Battle conclusion
    if (!player.isAlive()) {
        console.log(SKULL_AND_CROSSBONES);
        console.log('\x1b[31m%s\x1b[0m', '💀 GAME OVER 💀');
        console.log(
            '\x1b[31m%s\x1b[0m',
            'The Caribbean has claimed another pirate soul...'
        );
        console.log(
            '\x1b[33m%s\x1b[0m',
            `Captain ${player.name}, ye fought bravely but the sea be unforgiving.`
        );
        console.log(
            '\x1b[37m%s\x1b[0m',
            'Perhaps in another life, ye will find the treasure ye seek...'
        );
        isGameRunning = false;
        return false;
    } else {
        // Player victory
        console.log('\x1b[32m%s\x1b[0m', '🎉 VICTORY! 🎉');
        console.log(`\x1b[33mYe have defeated the ${enemy.name}!\x1b[0m`);

        // Rewards
        const healthGain = Math.floor(Math.random() * 20) + 10;
        player.heal(healthGain);
        player.inventory.push(enemy.loot);
        player.enemiesKilled++;

        console.log(
            `\x1b[32m❤️  You recover ${healthGain} health from the victory!\x1b[0m`
        );
        console.log(`\x1b[33m🎁 You found: ${enemy.loot}\x1b[0m`);
        console.log(
            `\x1b[36m💀 Total enemies defeated: ${player.enemiesKilled}/3\x1b[0m`
        );

        // Check for game completion
        if (player.enemiesKilled >= 3) {
            console.log(
                '\x1b[33m%s\x1b[0m',
                '🏆 ═══════════════════════════════════════════ 🏆'
            );
            console.log('\x1b[32m%s\x1b[0m', '    🎊 LEGENDARY VICTORY! 🎊');
            console.log(
                '\x1b[33m%s\x1b[0m',
                '🏆 ═══════════════════════════════════════════ 🏆'
            );
            console.log();
            console.log(
                `\x1b[36mCongratulations, Captain ${player.name}!\x1b[0m`
            );
            console.log(
                '\x1b[37mYe have conquered the cursed waters and become a legendary pirate!\x1b[0m'
            );
            console.log(
                '\x1b[33mYer name will be sung in taverns across the seven seas!\x1b[0m'
            );
            console.log();
            displayInventory();
            isGameRunning = false;
            return true;
        }

        readlineSync.question('Press Enter to continue yer adventure...');
        return true;
    }
}

function walk() {
    console.log(
        '\x1b[37mYou walk along the misty shores of a cursed Caribbean island...\x1b[0m'
    );
    console.log(
        '\x1b[37mThe sound of waves and distant thunder fills the air...\x1b[0m'
    );

    // 1/3 chance of enemy encounter
    const encounterChance = Math.random();
    if (encounterChance <= 0.33) {
        console.log();
        console.log(
            '\x1b[31m⚠️  Something stirs in the shadows ahead! ⚠️\x1b[0m'
        );
        readlineSync.question('Press Enter to face whatever lurks...');
        console.log();

        const enemy = createRandomEnemy();
        battle(enemy);
    } else {
        console.log('\x1b[32mThe path ahead remains clear... for now.\x1b[0m');
        console.log(
            '\x1b[37mYe find a moment of peace to catch yer breath.\x1b[0m'
        );
    }
}

function gameLoop() {
    while (isGameRunning && player.isAlive()) {
        displayStatus();

        console.log('\x1b[36mWhat be yer next move, captain?\x1b[0m');
        console.log('w - 🚶 Walk the island paths');
        console.log('p - 🎒 Check treasure chest (inventory)');
        console.log('q - 🚪 Abandon the adventure (quit)');

        const action = readlineSync
            .question('Enter yer command: ')
            .toLowerCase()
            .trim();
        console.log();

        switch (action) {
            case 'w':
            case 'walk':
                walk();
                break;
            case 'p':
            case 'print':
            case 'inventory':
                displayInventory();
                readlineSync.question('Press Enter to continue...');
                break;
            case 'q':
            case 'quit':
                console.log(
                    '\x1b[33mFarewell, Captain! May the winds be at yer back!\x1b[0m'
                );
                isGameRunning = false;
                break;
            default:
                console.log(
                    '\x1b[31mThat not be a valid command, ye scallywag!\x1b[0m'
                );
                console.log(
                    '\x1b[37mUse: w (walk), p (inventory), or q (quit)\x1b[0m'
                );
                break;
        }

        console.log();
    }
}

// Main game initialization
function startGame() {
    displayBanner();
    displayIntro();

    const playerName = getPlayerName();
    player = new Player(playerName);

    console.log();
    console.log(`\x1b[32mWelcome aboard, Captain ${playerName}!\x1b[0m`);
    console.log(
        '\x1b[37mYer adventure begins on the shores of a mysterious Caribbean island...\x1b[0m'
    );
    console.log(
        '\x1b[33mRemember: Defeat 3 enemies to claim victory and legendary status!\x1b[0m'
    );
    console.log();

    readlineSync.question('Press Enter to begin yer adventure...');
    console.log();

    gameLoop();
}

// Start the game
startGame();
