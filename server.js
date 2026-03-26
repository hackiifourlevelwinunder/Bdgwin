const express = require('express');
const path = require('path');

const app = express();

// PORT (Render ke liye important)
const PORT = process.env.PORT || 3000;

// Static files serve karega (HTML, CSS, JS)
app.use(express.static(__dirname));

// Optional: health check route
app.get('/ping', (req, res) => {
  res.send('Server is running 🚀');
});

// Default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
