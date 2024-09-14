const express = require('express');
const app = express();

// Define the port
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
