// Map of routes to their corresponding HTML responses
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>", // Info page route
    "/contact": "<h1>Contact Us</h1>", // Contact page route
    "/about": "<h1>Learn More About Us.</h1>", // About page route
    "/hello": "<h1>Say hello by emailing us here</h1>", // Hello page route
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>" // Error page route
};
// Set the port number for the server
const port = 3000,
// Import the http module to create the server
    http = require("http"),
// Import the http-status-codes module (not used in this code)
    httpStatus = require("http-status-codes"),
// Create the HTTP server and define the request handler
    app = http.createServer((req, res) => {
        // Set the response header to indicate HTML content
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        // Check if the requested URL matches a route in the map
        if (routeResponseMap[req.url]) {
            // If matched, send the corresponding HTML after a 2-second delay
            setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            // If not matched, send a default welcome message
            res.end("<h1>Welcome!</h1>");
        }
    });

// Start the server and listen on the specified port
app.listen(port);

// Log a message to the console indicating the server has started
console.log(`The server has started and is listening on port number:
${port}`);