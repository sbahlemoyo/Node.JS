// Listing 4.1

// Import required modules
const port = 3000, // Set the port number the server will listen on
  http = require("http"), // Import the built-in HTTP module
  httpStatus = require("http-status-codes"); // Import HTTP status codes

// Create the HTTP server
app = http.createServer((request, response) => {
  console.log("Received an incoming request!"); // Log when a request is received

  // Set the response header with status code and content type
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  // Define the response message
  let responseMessage = "<h1>Hello, Universe!</h1>";

  // Send the response message to the client
  response.write(responseMessage);
  response.end(); // End the response

  // Log the response sent
  console.log(`Sent a response : ${responseMessage}`);
});

// Start the server and listen on the specified port
app.listen(port);

// Log that the server has started
console.log(`The server has started and is listening on port number:
${port}`);