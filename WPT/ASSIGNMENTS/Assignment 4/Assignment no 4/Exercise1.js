/*Exercise 1: Create a function processData that takes two parameters: a string and a callback function. Your task is to write a callback that converts the string to uppercase and then call it within processData.
    Requirements: ● Define a function toUpperCase that will serve as a callback. ● Pass a string and toUpperCase to processData and log the output.*/

function toUpperCase(str) {
    return str.toUpperCase();
}

function processData(input, callback) {
    const result = callback(input);
    console.log("Uppercase String:", result);
}

processData("cdac mumbai", toUpperCase);
