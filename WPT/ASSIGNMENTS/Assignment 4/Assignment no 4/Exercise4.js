/*Exercise 3: Simulate a network request by creating a function fetchData that takes a URL and a callback as parameters. 
Use setTimeout to simulate a delay and then call the callback with a string representing a response. Requirements: 
● After a delay, log the “response” to the console.*/

function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const error = Math.random() < 0.5; // Simulate random error
        if (error) {
            callback("Network error occurred", null);
        } else {
            callback(null, "Data fetched successfully!");
        }
    }, 2000);
}

fetchData("https://jsonplaceholder.typicode.com/users", function(err, response) {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Response:", response);
    }
});
