function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const error = Math.random() < 0.3;
        if (error) {
            callback("Error fetching data", null);
        } else {
            callback(null, "Raw server data");
        }
    }, 2000);
}

function processData(data, callback) {
    console.log("Processing data...");
    setTimeout(() => {
        const processed = data.toUpperCase();
        callback(processed);
    }, 1000);
}

// Nested Callbacks
fetchData("https://jsonplaceholder.typicode.com/users", function(err, response) {
    if (err) {
        console.error("Fetch Error:", err);
    } else {
        processData(response, function(processedData) {
            console.log("Processed Data:", processedData);
        });
    }
});
