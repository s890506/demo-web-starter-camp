var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var path = require('path')
var app = express()

app.set('view engine','ejs')

// middleware
app.use(bodyParser.json({ type: 'applictaion/json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('serve-static')(path.join(__dirname, 'public')))

// REST API
app.get('/1/hello', function (req, res) {
  res.json({msg: 'Hello World'})
})

// frontend
app.get('/',function(req,res){
  res.render('index',{msg:'Hello World!'})
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
