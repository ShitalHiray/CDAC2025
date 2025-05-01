/*Exercise 4: Modify fetchData from Exercise 3 to include error handling. Requirements: 
● Call the callback with an error message if an error occurs; otherwise, pass the “response.” 
    ● Handle the error gracefully by logging it if it occurs.*/

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
