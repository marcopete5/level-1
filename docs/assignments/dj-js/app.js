// Select the square element from the DOM
const colorSquare = document.getElementById('color-square');

// 1. Blue when the mouse hovers over the square
colorSquare.addEventListener('mouseover', () => {
    colorSquare.style.backgroundColor = 'blue';
});

// 2. Red when the mouse button is held down
colorSquare.addEventListener('mousedown', () => {
    colorSquare.style.backgroundColor = 'red';
});

// 3. Yellow when the mouse button is let go
colorSquare.addEventListener('mouseup', () => {
    colorSquare.style.backgroundColor = 'yellow';
});

// 4. Green when the mouse is double-clicked
colorSquare.addEventListener('dblclick', () => {
    colorSquare.style.backgroundColor = 'green';
});

// 5. Orange when the mouse scroll is used anywhere in the window
window.addEventListener('wheel', () => {
    colorSquare.style.backgroundColor = 'orange';
});

// 6. Change color based on keyboard keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'b':
            colorSquare.style.backgroundColor = 'blue';
            break;
        case 'r':
            colorSquare.style.backgroundColor = 'red';
            break;
        case 'y':
            colorSquare.style.backgroundColor = 'yellow';
            break;
        case 'g':
            colorSquare.style.backgroundColor = 'green';
            break;
        case 'o':
            colorSquare.style.backgroundColor = 'orange';
            break;
    }
});
