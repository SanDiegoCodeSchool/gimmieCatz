const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/gimmieCats', (req, res) => {
  res.json(['cat-0.jpg', 'cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'])
})
module.exports = app
