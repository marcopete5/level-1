// BRONZE MEDAL REQUIREMENTS

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
