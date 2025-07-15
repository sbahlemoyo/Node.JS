const port = 3000, // Set the port number for the server

http = require("http"), // Import the built-in HTTP module

httpStatus = require("http-status-codes"), // Import HTTP status codes for easier reference

app = http.createServer(); // Create an HTTP server instance

app.on("request", (req, res) => { // Listen for incoming HTTP requests
  res.writeHead(httpStatus.OK, { // Send a response header with status 200 OK
    "Content-Type": "text/html" // Specify that the response content is HTML
  });

  let responseMessage = "<h1>This will show on the screen.</h1>"; // Define the HTML message to send
  
  res.end(responseMessage); // Send the response and close the connection
});

app.listen(port); // Start the server and listen on the specified port

console.log(`The server has started and is listening on port number: ${port}`); // Log a message to the console indicating the