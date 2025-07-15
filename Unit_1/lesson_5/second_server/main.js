const port = 3000, // Set the port number for the server

    http = require("http"), // Import the built-in HTTP module

    httpStatus = require("http-status-codes"), // Import HTTP status codes for easier reference

    app = http.createServer(); // Create an HTTP server instance

app.on("request", (req, res) => { // Listen for incoming HTTP requests

    var body = []; // Initialize an array to collect incoming data chunks
    req.on("data", (bodyData) => { // Listen for 'data' events (incoming data chunks)
        body.push(bodyData); // Add each chunk to the body array
    });
    req.on("end", () => { // Listen for the 'end' event (all data received)
        body = Buffer.concat(body).toString(); // Concatenate and convert the body to a string
        console.log(`Request Body Contents: ${body}`); // Log the request body contents
    });

    const getJSONString = obj => { // Helper function to pretty-print objects as JSON strings
        return JSON.stringify(obj, null, 2); // Convert object to JSON string with indentation
    };
    console.log(`Method: ${getJSONString(req.method)}`); // Log the HTTP method of the request
    console.log(`URL: ${getJSONString(req.url)}`); // Log the URL of the request
    console.log(`Headers: ${getJSONString(req.headers)}`); // Log the headers of the request

    res.writeHead(httpStatus.OK, { // Send a response header with status 200 OK
        "Content-Type": "text/html" // Specify that the response content is HTML
    });

    let responseMessage = "<h1>This will show on the screen.</h1>"; // Define the HTML message to send

    res.end(responseMessage); // Send the response and close the connection
});

app.listen(port); // Start the server and listen on the specified port

console.log(`The server has started and is listening on port number: ${port}`); // Log a message to the console indicating the