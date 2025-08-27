const form = document.addItem;
const list = document.getElementById('list');

// Part 1: Add new items
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newItemText = form.title.value;
    if (newItemText) {
        createListItem(newItemText);
        form.title.value = '';
    }
});

function createListItem(text) {
    const li = document.createElement('li');
    const itemDiv = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    itemDiv.textContent = text;
    editButton.textContent = 'edit';
    deleteButton.textContent = 'X';
    editButton.className = 'edit';
    deleteButton.className = 'delete';

    li.appendChild(itemDiv);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
