// server.js

const express = require('express');

const cors = require('cors');

const app = express();

const port = 5000;

 

app.use(cors()); // Enable CORS for frontend requests

 

// Sample data

const users = [

  { id: 1, name: "Alice", email: "alice@example.com" },

  { id: 2, name: "Bob", email: "bob@example.com" },

  { id: 3, name: "Charlie", email: "charlie@example.com" }

];

 

// API route

app.get('/api/users', (req, res) => {

  res.json(users);

});

 

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);

});

 