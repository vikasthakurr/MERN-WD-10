// Import the express module
import express from "express";
// Third-party middleware for logging (optional, run 'npm install morgan')
import morgan from "morgan";

const PORT = 3000;
const app = express();

// --- NOTES ON MIDDLEWARE ---
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:
// - Execute any code.
// - Make changes to the request and the response objects.
// - End the request-response cycle.
// - Call the next middleware in the stack.

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

// --- TYPES OF MIDDLEWARE ---

// 1. BUILT-IN MIDDLEWARE
// These are middleware that come with Express.

// `express.json()`: Parses incoming requests with JSON payloads.
app.use(express.json());

// `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: true }));

// `express.static()`: Serves static files.
// app.use(express.static('public'));


// 2. THIRD-PARTY MIDDLEWARE
// These are middleware that you can add to your project.
// Example: `morgan` for HTTP request logging.
// To use morgan, you need to install it first: `npm install morgan`
app.use(morgan('dev'));


// 3. APPLICATION-LEVEL MIDDLEWARE
// This middleware is bound to the app object using app.use() or app.METHOD().

// A simple logger middleware
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Use the logger middleware for all routes
app.use(logger);

// Authentication middleware
const authenticate = (req, res, next) => {
  const { username, password, role } = req.body;
  if (username === "vikas" && password === "1234" && role === "admin") {
    console.log("Authentication successful");
    next();
  } else {
    res.status(401).send("Invalid credentials");
  }
};


// 4. ROUTER-LEVEL MIDDLEWARE
// This middleware works in the same way as application-level middleware, but it is bound to an instance of express.Router().

const router = express.Router();

// A middleware for a specific router
const routerMiddleware = (req, res, next) => {
  console.log("Router middleware called");
  next();
};

router.use(routerMiddleware);

router.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!');
});


// Use the router
app.use('/admin', router);


// --- ROUTES ---

// Public route, accessible to everyone
app.get("/", (req, res) => {
  res.send("Hello from the home page");
});

// Protected route, uses the authenticate middleware
app.post("/login", authenticate, (req, res) => {
  res.send("Hi from login, you are authenticated");
});


// 5. ERROR-HANDLING MIDDLEWARE
// This middleware has a special signature with four arguments (err, req, res, next).
// It is used to catch and handle errors that occur in the application.

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

// Route that will throw an error
app.get('/error', (req, res, next) => {
    try {
        // Simulate an error
        throw new Error('This is a simulated error');
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

// Use the error-handling middleware (it should be the last middleware)
app.use(errorHandler);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});