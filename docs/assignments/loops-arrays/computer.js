var officeItems = [
    'stapler',
    'monitor',
    'computer',
    'desk',
    'lamp',
    'computer',
    'lamp',
    'stapler',
    'computer',
    'computer'
];
var computerCount = 0;

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer') {
        computerCount++;
    }
}

console.log('Final computer count:', computerCount); // Output: 4
