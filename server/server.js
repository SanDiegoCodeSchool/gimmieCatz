const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/gimmieCats', (req, res) => {
    res.json([
      'download-1.jpg',
      'download-2.jpg',
      'download.jpg',
      'images-1.jpg',
      'images.jpg'
    ]);
});
module.exports = app;
