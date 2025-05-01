function toUpperCase(str) {
    return str.toUpperCase();
}

function processData(input, callback) {
    const result = callback(input);
    console.log("Uppercase String:", result);
}

processData("cdac mumbai", toUpperCase);