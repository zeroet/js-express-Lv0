const express = require('express')
const app = express()
const port = 4000

const config = require('./config/key');

// Model - Schema User
const { User } = require("./models/User");

// bodyParser
const bodyParser = require('body-parser');
// application/x-www.form-urlenconded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(()=> console.log('MongoDb Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! hello hello')
})

app.post('/register', (req, res) => {
  // sign up date - > put db

    const user = new User(req.body)
    // mongo db methode
    user.save((err, doc) => {
      if (err) return res.json({ success: false, err})
      return res.status(200).json({
        success: true
      })
    })
})

app.post('/login', (req, res) => {
  
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
