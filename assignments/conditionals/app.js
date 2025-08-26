//while loops if statements

//conditional is something that runs if its true, doesn't run if its false

// if(condition){
//     // this code will run if that condition is true
// }

// if the condition is false, this code will not run

// a condition can be something straight forward like true or false, or a variable equal to true or false

// let hasKey = false;

// if (hasKey){
//     // this code will run if hasKey is true
//     // this code will not run if hasKey is false
// }

// a conditions whose comparison is true or false

// let age = 20;

// if (age >= 18) {
//     // this code will run if the number is 18 or higher
// }

// let age = 0;

// //any number that exists that is not 0 is true
// // if the number is 0, it is false

// if (age) {
//     console.log('this number equates to true');
// }

// let str = '';

// // any string that is not an empty string '' is true;
// // if the string is empty, it is false

// if (str) {
//     console.log('this string equates to true');
// }


// undefined, NaN, null, '', 0 --> these are all false always


// || is equal to OR. 
// && is equal to AND.
// ! is equal to NOT

// Only one thing needs to be true when using the || operator
true || false --> true
true || true --> true
false || true --> true
false || false --> false
true || false || false || false --> true

age >= 18 || name === 'John' --> if age is 18 or higher, this will be true


// everything needs to be true when using the && operator
true && false --> false
true && true --> true
false && true --> false
false && false --> false
true && true && true && false --> false

age >= 18 && name === 'John' --> if age is 18 or higher and name is John, this will be true

// ! is the NOT operator and it just inverts the value
!true --> false
!false --> true
!(age >= 18) --> if age is 18 or higher, this will be false
!name --> if name is not an empty String, this will be false