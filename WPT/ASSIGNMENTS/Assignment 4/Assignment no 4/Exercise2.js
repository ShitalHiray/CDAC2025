/*Exercise 2: Write a function forEachElement that accepts an array and a callback. 
This function should apply the callback to each element of the array. Requirements: 
● Pass an anonymous function as the callback that multiplies each element by 2 and logs the result with the index.*/

function forEachElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

const numbers = [1, 2, 3, 4, 5];

forEachElement(numbers, function(element, index) {
    console.log(`Index ${index}: ${element * 2}`);
});
