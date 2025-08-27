function lightToggle(arr) {
    var totalToggles = 0;
    for (var i = 0; i < arr.length; i++) {
        totalToggles += arr[i];
    }

    if (totalToggles % 2 === 0) {
        console.log('The light is off');
    } else {
        console.log('The light is on');
    }
}

lightToggle([2, 5, 435, 4, 3]); // "The light is on"
lightToggle([1, 1, 1, 1, 3]); // "The light is on"
lightToggle([9, 3, 4, 2]); // "The light is off"
