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
