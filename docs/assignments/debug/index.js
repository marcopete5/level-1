const colors = ['red', 'blue', 'green'];

// BUG FIX: Changed "onclick" to "click".
document.getElementById('add').addEventListener('click', function (e) {
    const subItem = createSubItem(e);
    document.getElementById('list').appendChild(subItem);
    // Clear the input box after adding an item for better UX
    document.getElementById('input').value = '';
});

function createDropDown() {
    const dropDown = document.createElement('select');
    // BUG FIX: Changed loop condition from 'i < colors' to 'i < colors.length'.
    for (let i = 0; i < colors.length; i++) {
        // BUG FIX: Changed 'createElement' to 'document.createElement'.
        const option = document.createElement('option');
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    // BUG FIX: Changed "onchange" to "change".
    dropDown.addEventListener('change', function (e) {
        // BUG FIX: Changed 'e.target.parent.backgroundColor' to 'e.target.parentElement.style.backgroundColor'.
        e.target.parentElement.style.backgroundColor = e.target.value;
    });
    return dropDown;
}

function createSubItem(e) {
    const subItem = document.createElement('div');
    // BUG FIX: Changed from getting the element to getting the element's '.value'.
    const subItemValue = document.getElementById('input').value;
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute('class', 'subItem');
    return subItem;
}
