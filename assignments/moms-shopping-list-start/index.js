// grab our form
const form = document.querySelector('form');

// grab our input value
const input = form.title;

// grab our list
const list = document.getElementById('list');

//create list with existing items
const items = ['Milk', 'Cheerios', '2 Goats'];

for (let i = 0; i < items.length; i++) {
    createListItem(items[i]);
}

// when we click the button on the form we want to add a new item (the input value) to our list

// create an event listener for when the submit button is clicked

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // test to see our input value when clicked first
    const value = input.value;
    input.value = '';

    createListItem(value);
});

function createListItem(val) {
    // once that is working create a new element to put the value in
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.textContent = val;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.style.margin = '3px';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.margin = '3px';

    deleteBtn.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });

    li.append(div, editBtn, deleteBtn);

    // add that new element to the list
    list.appendChild(li);
}
