// BRONZE MEDAL REQUIREMENTS (included in Silver)
// 1. Create the header elements
const header = document.getElementById('header');
const h1 = document.createElement('h1');
const span = document.createElement('span');
const p = document.createElement('p');

// 2. Set the text content
h1.textContent = 'JavaScript Made This!! ';
span.textContent = 'Marcus';
p.textContent = ' wrote the JavaScript';

// 3. Apply classes for styling
h1.className = 'header';
span.className = 'name';
p.style.textAlign = 'center';

// 4. Append the elements to the DOM

header.appendChild(h1);
p.prepend(span);
header.appendChild(p);

// SILVER MEDAL REQUIREMENTS

// 1. Change the words of the conversation
const messages = document.querySelectorAll('.message');
const funMessages = [
    "You're awesome!",
    "No, you're awesome!",
    "Let's go get some pizza.",
    'Okay, that sounds great!'
];

for (let i = 0; i < messages.length; i++) {
    messages[i].textContent = funMessages[i];
}

// 2. Clear the conversation when the "clear" button is clicked
const clearButton = document.getElementById('clear-button');
const messageContainer = document.querySelector('.messages');

clearButton.addEventListener('click', () => {
    messageContainer.innerHTML = '';
});
