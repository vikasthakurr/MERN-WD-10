
// --- Building a RESTful API with Express ---

// Import the express module, which is a minimal and flexible Node.js web application framework.
import express from "express";

// Define the port number for the server. It's a good practice to use environment variables for this in a real application.
const PORT = 3000;

// Create an instance of the express application. This `server` object will be used to configure and run the web server.
const server = express();

// --- Middleware ---
// Middleware are functions that execute during the lifecycle of a request to the server.

// `express.json()` is a built-in middleware that parses incoming requests with JSON payloads.
// It populates `req.body` with the parsed JSON data.
server.use(express.json());


// --- In-Memory Database ---
// To simulate a real database, we'll use a simple in-memory array of user objects.
// In a real-world application, this would be replaced with a connection to a database like MongoDB, PostgreSQL, etc.
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];
let nextId = 3;


// --- API Routes (Endpoints) ---
// These are the different URLs that our API will expose to clients.

// 1. GET /users - Retrieve all users (Read operation)
// This route handles GET requests to the /users endpoint.
server.get("/users", (req, res) => {
  // It responds with the entire `users` array in JSON format.
  // Express automatically sets the Content-Type header to application/json.
  res.status(200).json(users);
});

// 2. GET /users/:id - Retrieve a single user by ID (Read operation)
// The `:id` is a route parameter, which allows us to capture dynamic values from the URL.
server.get("/users/:id", (req, res) => {
  // `req.params.id` contains the value of the `id` parameter from the URL.
  // We parse it to an integer because URL parameters are always strings.
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    // If the user is found, send it back with a 200 OK status.
    res.status(200).json(user);
  } else {
    // If no user is found with that ID, send a 404 Not Found status and an error message.
    res.status(404).send("User not found");
  }
});

// 3. POST /users - Create a new user (Create operation)
// This route handles POST requests to create new resources.
server.post("/users", (req, res) => {
  // The new user's data is expected to be in the request body in JSON format.
  const { name, email } = req.body;

  // Basic validation to ensure required fields are present.
  if (!name || !email) {
    return res.status(400).send("Please provide both name and email.");
  }

  // Create a new user object with a unique ID.
  const newUser = {
    id: nextId++,
    name,
    email,
  };

  // Add the new user to our "database".
  users.push(newUser);

  // Respond with a 201 Created status and the newly created user object.
  res.status(201).json(newUser);
});

// 4. PUT /users/:id - Update an existing user (Update operation)
// This route is used to update an entire resource.
server.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    // The updated data is in the request body.
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).send("Please provide both name and email for the update.");
    }

    // Create the updated user object.
    const updatedUser = { id: userId, name, email };
    // Replace the old user object with the new one.
    users[userIndex] = updatedUser;

    // Respond with a 200 OK status and the updated user.
    res.status(200).json(updatedUser);
  } else {
    res.status(404).send("User not found");
  }
});

// 5. DELETE /users/:id - Delete a user (Delete operation)
// This route handles the deletion of a resource.
server.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const initialLength = users.length;

  // Filter the users array to exclude the user with the matching ID.
  users = users.filter(u => u.id !== userId);

  if (users.length < initialLength) {
    // If a user was deleted, the array length will be smaller.
    // Respond with a 204 No Content status, which is standard for successful deletions.
    res.status(204).send();
  } else {
    // If the array length is unchanged, the user was not found.
    res.status(404).send("User not found");
  }
});


// --- Start the Server ---
// The `server.listen()` method starts the server and makes it listen for incoming connections on the specified port.
server.listen(PORT, () => {
  // This callback function is executed once the server is successfully started.
  console.log(`Server is running on http://localhost:${PORT}`);
});
