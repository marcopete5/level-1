const form = document.addItem;
const list = document.getElementById('list');

// Part 1: Add new items
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const newItemText = form.title.value;
    if (newItemText) {
        createListItem(newItemText);
        form.title.value = ''; // Clear the input box
    }
});

function createListItem(text) {
    // Create the new list item and its contents
    const li = document.createElement('li');
    const itemDiv = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    // Set the content and classes
    itemDiv.textContent = text;
    editButton.textContent = 'edit';
    deleteButton.textContent = 'X';
    editButton.className = 'edit';
    deleteButton.className = 'delete';

    // Append the elements
    li.appendChild(itemDiv);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
}

// Part 2 & Extra Credit: Delete and Edit items using event delegation
list.addEventListener('click', (event) => {
    const target = event.target;
    const li = target.parentElement;
    const itemDiv = li.firstChild;

    // Handle delete button click
    if (target.classList.contains('delete')) {
        list.removeChild(li);
    }

    // Handle edit button click
    if (target.classList.contains('edit')) {
        const currentText = itemDiv.textContent;

        // Create input box and save button
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = currentText;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'save';
        saveButton.className = 'save';

        // Replace the div and edit button
        li.replaceChild(editInput, itemDiv);
        li.replaceChild(saveButton, target);
    }

    // Handle save button click
    if (target.classList.contains('save')) {
        const editInput = li.firstChild;
        const newText = editInput.value;

        // Create new div and edit button
        const newItemDiv = document.createElement('div');
        newItemDiv.textContent = newText;

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.className = 'edit';

        // Replace the input and save button
        li.replaceChild(newItemDiv, editInput);
        li.replaceChild(editButton, target);
    }
});
