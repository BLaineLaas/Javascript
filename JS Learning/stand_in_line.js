/* function that takes an array and number as arguments
adds number to the end of the array and removes first element of array
returns element that was removed */

function nextInLine(arr, item) {
    arr.push(item);
    arr.shift([0]);
    return arr;



}

// Setup test array
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr));