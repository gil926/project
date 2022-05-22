const express = require('express')
const app = express()
const ejs =require('ejs')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
    res.render('about')
  })

  app.get('/q&A', function (req, res) {
    res.render('Q&A')
  })

  app.get('/shop', function (req, res) {
    res.render('shop')
  })
  
app.use( express.static('images'))
  
app.listen(3000)
