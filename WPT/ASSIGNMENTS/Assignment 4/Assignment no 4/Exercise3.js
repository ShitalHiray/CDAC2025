/*Exercise 3: Simulate a network request by creating a function fetchData that takes a URL and a callback as parameters. 
Use setTimeout to simulate a delay and then call the callback with a string representing a response. Requirements: 
● After a delay, log the “response” to the console.*/
function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const response = "Data fetched successfully!";
        callback(response);
    }, 2000); 
}
fetchData("https://jsonplaceholder.typicode.com/users", function(response) {
    console.log("Response:", response);
});
