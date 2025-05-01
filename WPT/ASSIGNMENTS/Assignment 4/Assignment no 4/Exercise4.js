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