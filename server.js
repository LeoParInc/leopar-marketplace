const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Railway will provide PORT

// Serve static files (CSS/JS/images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML for all routes (SPA-style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
