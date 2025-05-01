function forEachElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

const numbers = [1, 2, 3, 4, 5];

forEachElement(numbers, function(element, index) {
    console.log(`Index ${index}: ${element * 2}`);
});