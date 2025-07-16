// Set the port number for the server
const port = 3000,
// Import the built-in http module to create the server
    http = require("http"),
    // Import http-status-codes for readable status codes
    httpStatus = require("http-status-codes"),
    // Import the file system module to read HTML files
    fs = require("fs");

// Map routes to their corresponding HTML files
const routeMap = {
    "/": "views/index.html"
};

// Create and start the HTTP server
http
    .createServer((req, res) => {
        // Set the response header to status OK and content type HTML
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        // Check if the requested URL exists in the route map
        if (routeMap[req.url]) {
            // Read the corresponding HTML file asynchronously
            fs.readFile(routeMap[req.url], (error, data) => {
                // Write the file data to the response
                res.write(data);
                // End the response
                res.end();
            });
        } else {
            // If route not found, send a simple HTML error message
            res.end("<h1>Sorry, not found.</h1>");
        }
    })
    // Listen for incoming requests on the specified port
    .listen(port);

// Log a message to the console when the server starts
console.log(`The server has started and is listening
 on port number: ${port}`);
