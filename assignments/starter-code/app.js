function isOldEnough(age) {
    if (age >= 18) {
        return `You are ${age} years old, that is old enough`;
    } else {
        return `you are only ${age} years old, that is not old enough`;
    }
}

console.log(isOldEnough(12));
console.log(isOldEnough(14));
console.log(isOldEnough(45));
console.log(isOldEnough(18));
